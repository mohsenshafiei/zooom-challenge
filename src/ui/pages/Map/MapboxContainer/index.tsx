import * as React from 'react';
import * as mapboxgl from 'mapbox-gl';
import {LngLatLike, LngLat} from 'mapbox-gl';
import {IPlace} from 'store/map/models';
import {Information} from 'ui/components/Information';
import {Map as Mapbox, Marker} from 'ui/components/Mapbox';

const style = require('./style.scss');

interface MapProps {
  mapCenter: LngLatLike;
  selectedPlace: IPlace;
  locations: Array<IPlace>;
  firstCategory: boolean;
  secondCategory: boolean;
  showDetails: boolean
  mapCenterChanged?: (location: LngLatLike) => void;
  closeDetails?: () => void;
}

interface MapState {
  map: mapboxgl.Map | null;
}

export class MapboxContainer extends React.Component<MapProps, MapState> {
  constructor(props: MapProps) {
    super(props);
    this.onMapLoad = this.onMapLoad.bind(this);
    this.fitBounds = this.fitBounds.bind(this);
  }

  readonly state: MapState = {
    map: null,
  };

  onMapLoad(map: mapboxgl.Map) {
    this.setState({
      map
    });
  }

  componentDidMount() {
    if (this.props.locations) {
      this.fitBounds(this.props.locations);
    }
  }

  componentDidUpdate(prevProps: MapProps) {
    const {map} = this.state;
    map.panTo(this.props.mapCenter);
  }

  fitBounds(locations: Array<IPlace>) {
    const {map} = this.state;
    if (locations.length === 0) return;

    if (locations.length === 1) {
      map.panTo(locations[0].location);
    } else {
      // @ts-ignore
      const bounds = new mapboxgl.LngLatBounds(locations.map((place) => place.location));
      console.log(bounds);
      setTimeout(() => {
        map.fitBounds(bounds, {
          padding: {
            top: 72,
            right: 500,
            bottom: 30,
            left: 30,
          },
        });
      }, 500);
    }
  }

  render() {
    return (
      <div className={style.map}>
        <Mapbox
          onLoad={this.onMapLoad}
          center={this.props.mapCenter}
          onMoveEnd={(location) => {this.props.mapCenterChanged(location)}}
          height="calc(100vh - 5em)"
          zoom={6}
        >
          {
            this.props.locations.map((place, index) => {
              if (place.category=== 1 && this.props.firstCategory) {
                return <Marker
                  anchor="bottom"
                  icon={{
                    height: 48,
                    width: 48,
                    url: require('assets/images/markers/marker.png')
                  }}
                  position={place.location}
                  key={index}
                />
              }
              if (place.category=== 2 && this.props.secondCategory) {
                return <Marker
                  anchor="bottom"
                  icon={{
                    height: 48,
                    width: 48,
                    url: require('assets/images/markers/marker.png')
                  }}
                  position={place.location}
                  key={index}
                />
              }
            })
          }
        </Mapbox>
        {
          (this.props.mapCenter === this.props.selectedPlace.location)
          && this.props.showDetails
          && <Information
                detail={this.props.selectedPlace}
                close={ () => {
                  this.props.closeDetails();
                }}
            />
        }
      </div>
    );
  }
}
