import * as React from 'react';
import * as mapboxgl from 'mapbox-gl';
import { LngLatLike, LngLat } from 'mapbox-gl';
import { Map as Mapbox, Marker } from 'ui/components/Mapbox';
const style = require('./style.scss');

interface MapProps {
  mapCenter: LngLatLike;
  sourceLocation?: LngLat;
  destinationLocation?: LngLat;
  secondDestinationLocation?: LngLat;
  driverLocation?: LngLat;
  serviceType?: number;
  mapCenterChanged?: (location: LngLatLike) => void;
}

interface MapState {
  map: mapboxgl.Map | null;
}

export class MapboxContainer extends React.PureComponent<MapProps, MapState> {
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

  componentDidUpdate(prevProps: MapProps) {
    if (
      (this.props.sourceLocation !== prevProps.sourceLocation) ||
      (this.props.destinationLocation !== prevProps.destinationLocation) ||
      (this.props.secondDestinationLocation !== prevProps.secondDestinationLocation)
    ) {
      const locations = [
        this.props.sourceLocation,
        this.props.destinationLocation,
        this.props.secondDestinationLocation,
      ].filter((item) => item !== null);
      this.fitBounds(locations);
    }
  }

  fitBounds(locations: LngLat[]) {
    const { map } = this.state;
    if (locations.length === 0) return;

    if (locations.length === 1) {
      map.panTo(locations[0]);
    } else {
      // @ts-ignore
      const bounds = new mapboxgl.LngLatBounds(locations.map((location) => [location.lng, location.lat]));
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
    const {
      mapCenter,
      mapCenterChanged,
    } = this.props;

    return (
      <div className={style.map}>
        <Mapbox
          onLoad={this.onMapLoad}
          center={mapCenter}
          onMoveEnd={(location) => { mapCenterChanged(location) }}
          height="calc(100vh - 5em)"
          zoom={14}
        >
          <Marker
            anchor="bottom"
            icon={{
              height: 48,
              width: 48,
              url: require('assets/images/markers/marker.png')
            }}
            position={mapCenter}
          />
        </Mapbox>
      </div>
    );
  }
}
