import * as React from 'react';
const style = require('./style.scss');
import { LngLatLike } from 'mapbox-gl';
import {IPlace} from "store/map/models";

interface IPlaceProps {
  headline: string,
  description: string,
  address: string,
  zip: string,
  country: string,
  startDate: string,
  endDate: string,
  category: number,
  location: LngLatLike,
  selectLocation: (place: IPlace) => void
}
interface IPlaceState {
}

export class Place extends React.PureComponent<IPlaceProps, IPlaceState> {
  constructor(props: IPlaceProps) {
    super(props);
    this.select = this.select.bind(this);
  }
  select(coordination: LngLatLike) {
    this.props.selectLocation({
      headline: this.props.headline,
      description: this.props.description,
      address: this.props.address,
      zip: this.props.zip,
      country: this.props.country,
      startDate: this.props.startDate,
      endDate: this.props.endDate,
      category: this.props.category,
      location: this.props.location,
    });
  }
  render() {
    return (
      <div
        className={style.place}
        onClick={(e) => { this.select(this.props.location) }}>
        <div className={style.informationContainer}>
          <p className={style.headline}>{this.props.headline}</p>
          <p>{this.props.country}</p>
        </div>
      </div>
    );
  }
}
