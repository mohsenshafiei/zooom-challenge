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
import {
  setLocationAction,
  setFilteration,
  closeDetails
} from "store/map/actions";

interface IProps {
  mapCenter: LngLatLike;
  locations: Array<IPlace>;
  firstCategory: boolean;
  secondCategory: boolean;
  showDetails: boolean;
  selectLocation: (coordination: LngLatLike) => {}
  setFilter: (option: number) => {}
  closeModalDetails: () => {}
}

interface IState {
  title: string,
  selectedPlace: IPlace;
}

class Map_Page extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      title: '',
      selectedPlace: this.props.locations[0],
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleFilteration = this.handleFilteration.bind(this);
    this.setLocation = this.setLocation.bind(this);
  }


  handleSearch(input: string) {
    console.log(input);
  }

  handleFilteration(option: number) {
    console.log(option);
    this.props.setFilter(option)
  }

  setLocation(place: IPlace) {
    this.props.selectLocation(place.location);
    this.setState({
      selectedPlace: place,
    });
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
              if (place.category === 1 && this.props.firstCategory) {
                return <Place
                  selectLocation={
                    (place) => {
                      this.setLocation(place)
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
              }
              if (place.category === 2 && this.props.secondCategory) {
                return <Place
                  selectLocation={
                    (place) => {
                      this.setLocation(place)
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
              }

            })
          }
        </Locations>
        <MapboxContainer
          mapCenter={this.props.mapCenter}
          mapCenterChanged={(e) => {
            console.log(e)
          }}
          locations={this.props.locations}
          selectedPlace={this.state.selectedPlace}
          firstCategory={this.props.firstCategory}
          secondCategory={this.props.secondCategory}
          showDetails={this.props.showDetails}
          closeDetails={ () => {
            this.props.closeModalDetails()
          }}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  selectLocation: (coordination: LngLatLike) => {
    dispatch(setLocationAction({coordination}))
  },
  setFilter: (option: number) => {
    dispatch(setFilteration(option));
  },
  closeModalDetails: () => {
    dispatch(closeDetails());
  }
});
const mapStateToProps = (state: any) => ({
  mapCenter: state.map.mapCenter,
  locations: state.map.locations,
  firstCategory: state.map.firstCategory,
  secondCategory: state.map.secondCategory,
  showDetails: state.map.showDetails,
});

export const Map = connect(mapStateToProps, mapDispatchToProps)(Map_Page);
