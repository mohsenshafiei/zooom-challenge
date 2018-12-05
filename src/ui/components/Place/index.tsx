import * as React from 'react';
const style = require('./style.scss');
import { LngLatLike } from 'mapbox-gl';

interface IPlaceProps {
  headline: string,
  description: string,
  address: string,
  zip: string,
  country: string,
  startDate: string,
  endDate: string,
  category: string,
  location: LngLatLike,
  selectLocation: (coordination: LngLatLike) => void
}
interface IPlaceState {
  title: string;
}

export class Place extends React.PureComponent<IPlaceProps, IPlaceState> {
  constructor(props: IPlaceProps) {
    super(props);
    this.select = this.select.bind(this);
  }
  select(coordination: LngLatLike) {
    this.props.selectLocation(coordination);
  }
  render() {
    return (
      <div className={style.place} onClick={(e) => { this.select(this.props.location) }}>
        <div className={style.informationContainer}>
          <p className={style.headline}>{this.props.headline}</p>
          <p>{this.props.description}</p>
          <p>{this.props.address}</p>
          <p>{this.props.zip}</p>
          <p>{this.props.country}</p>
          <p>{this.props.startDate}</p>
          <p>{this.props.endDate}</p>
          <p>{this.props.category}</p>
        </div>
      </div>
    );
  }
}
