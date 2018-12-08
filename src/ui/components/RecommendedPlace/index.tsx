import * as React from 'react';
const style = require('./style.scss');
import { LngLatLike } from 'mapbox-gl';
import {IPlace} from "store/map/models";

interface IRecommendedPlaceProps {
  headline: string,
  location: LngLatLike,
  selectLocation: (place: IPlace) => void
}
interface IRecommendedPlaceState {
}

export class RecommendedPlace extends React.PureComponent<IRecommendedPlaceProps, IRecommendedPlaceState> {
  constructor(props: IRecommendedPlaceProps) {
    super(props);
    this.select = this.select.bind(this);
  }
  select(coordination: LngLatLike) {
    this.props.selectLocation({
      headline: this.props.headline,
      description: '',
      address: '',
      zip: '',
      country: '',
      startDate: '',
      endDate: '',
      category: 0,
      location: this.props.location,
    });
  }
  render() {
    return (
      <div className={style.place} onClick={(e) => { this.select(this.props.location) }}>
        <div className={style.informationContainer}>
          <p className={style.headline}>{this.props.headline}</p>
        </div>
      </div>
    );
  }
}
