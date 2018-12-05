import * as React from 'react';

const style = require('./style.scss');
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {Locations} from 'ui/components/Locations';
import {LngLatLike} from 'mapbox-gl';
import {MapboxContainer} from 'ui/pages/Map/MapboxContainer';
import {Place} from 'ui/components/Place';
import {IPlace} from 'store/map/models';
import {Filter} from 'ui/components/Filter';
import {SearchBox} from 'ui/components/SearchBox';
import {setLocationAction} from "store/map/actions";

interface IProps {
  mapCenter: LngLatLike
  locations: Array<IPlace>
  setLocation: (coordination: LngLatLike) => {}
}

interface IState {
  title: string,
}

class Map_Page extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      title: '',
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleFilteration = this.handleFilteration.bind(this);
    this.mapCenterChanged = this.mapCenterChanged.bind(this);
    this.setLocation = this.setLocation.bind(this);
  }


  handleSearch(input: string) {
    console.log(input);
  }

  handleFilteration(option: string) {
    console.log(option);
  }

  mapCenterChanged(e: any) {
    console.log(e);
  }

  setLocation(coordination: LngLatLike) {
    this.props.setLocation(coordination);
  }

  public render() {

    return (
      <div className={style.container}>
        <Locations>
          <SearchBox changeInput={(input) => {
            this.handleSearch(input)
          }}/>
          <Filter changeFilter={(option) => {
            this.handleFilteration(option)
          }}/>
          <h4 className={style.title}>Our Meeting Places</h4>
          {
            this.props.locations.map((place, index) => {
              return <Place
                selectLocation={
                  (coordination) => {
                    this.setLocation(coordination)
                  }
                }
                headline={place.headline}
                description={place.description}
                address={place.address}
                zip={place.zip}
                country={place.country}
                startDate={place.startDate}
                endDate={place.endDate}
                category={place.category}
                location={place.location}
                key={index}
              />
            })
          }
        </Locations>
        <MapboxContainer
          mapCenter={this.props.mapCenter}
          mapCenterChanged={(e) => {
            this.mapCenterChanged(e)
          }}
          locations={this.props.locations}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setLocation: (coordination: LngLatLike) => {
    dispatch(setLocationAction({coordination}))
  }
});
const mapStateToProps = (state: any) => ({
  mapCenter: state.map.mapCenter,
  locations: state.map.locations
});

export const Map = connect(mapStateToProps, mapDispatchToProps)(Map_Page);
