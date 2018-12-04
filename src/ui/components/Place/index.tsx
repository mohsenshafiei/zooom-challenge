import * as React from 'react';
const style = require('./style.scss');

interface IPlaceProps {
  headline?: string,
  description?: string,
  address?: string,
  zip?: string,
  country?: string,
  startDate?: string,
  EndDate?: string,
  category?: string,
  location?: string,
  selectLocation?: (coordination: Array<number>) => void
}
interface IPlaceState {
  title: string;
}

export class Place extends React.PureComponent<IPlaceProps, IPlaceState> {
  constructor(props: IPlaceProps) {
    super(props);
    this.select = this.select.bind(this);
  }
  select(coordination: Array<number>) {
    this.props.selectLocation(coordination);
  }
  render() {
    return (
      <div className={style.place} onClick={(e) => { this.select([33, 44]) }}>
        <div className={style.informationContainer}>
          <p>Headline</p>
          <p>Description</p>
          <p>Address</p>
          <p>Zip</p>
          <p>Country</p>
          <p>Start Date</p>
          <p>End Date</p>
          <p>Category</p>
        </div>
      </div>
    );
  }
}
