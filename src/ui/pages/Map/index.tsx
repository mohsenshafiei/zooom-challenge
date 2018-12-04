import * as React from 'react';

const style = require('./style.scss');
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import { Locations } from 'ui/components/Locations';
import { LngLatLike } from 'mapbox-gl';
import { MapboxContainer } from 'ui/pages/Map/MapboxContainer';
import { Place } from 'ui/components/Place';
import { Filter } from 'ui/components/Filter';
import { SearchBox } from 'ui/components/SearchBox';

interface IProps {
}

interface IState {
  title: string,
  center: LngLatLike,
}

class Map_Page extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      title: '',
      center: [13.3000213, 47.7954466],
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleFilteration = this.handleFilteration.bind(this);
    this.mapCenterChanged = this.mapCenterChanged.bind(this);
    this.goToLocation = this.goToLocation.bind(this);
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
  goToLocation(coordination: Array<number>) {
    console.log(coordination);
  }

  public render() {
    return (
      <div className={style.container}>
        <Locations>
          <SearchBox changeInput={ (input) => { this.handleSearch(input) }}/>
          <Filter changeFilter={ (option) => { this.handleFilteration(option)}}/>
          <Place selectLocation={ (coordination) => { this.goToLocation(coordination)} }/>
          <Place/>
          <Place/>
          <Place/>
          <Place/>
          <Place/>
          <Place/>
          <Place/>
        </Locations>
        <MapboxContainer
          mapCenter={this.state.center}
          mapCenterChanged={ (e) => { this.mapCenterChanged(e)}}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({});

export const Map = connect(null, mapDispatchToProps)(Map_Page);
