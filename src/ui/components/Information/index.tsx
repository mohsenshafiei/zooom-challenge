import * as React from 'react';
const style = require('./style.scss');
import {IPlace} from "store/map/models";
import {closeDetails} from "store/map/actions";

interface IInformationProps {
  detail: IPlace,
  close: () => void;
}
interface IInformationState {
}

export class Information extends React.PureComponent<IInformationProps, IInformationState> {
  constructor(props: IInformationProps) {
    super(props);
  }

  render() {
    return (
      <div className={style.information}>
        <div className={style.informationContainer}>
          <span
            className={style.closeButton}
            onClick={() => this.props.close()}
          >&#x2716;</span>
          <p className={style.headline}>{this.props.detail.headline}</p>
          <hr/>
          <p><strong>{this.props.detail.description}</strong></p>
          <p><strong>Address: </strong>{this.props.detail.address}</p>
          <p><strong>Zip Code: </strong>{this.props.detail.zip}</p>
          <p><strong>Country: </strong>{this.props.detail.country}</p>
          <p><strong>Start Date: </strong>{this.props.detail.startDate}</p>
          <p><strong>End Date: </strong>{this.props.detail.endDate}</p>
        </div>
      </div>
    );
  }
}
