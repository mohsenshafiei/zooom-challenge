import * as React from 'react';
const style = require('./style.scss');
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import {Link} from "react-router-dom";

interface IProps {
}
interface IState {
}

class Home_Page extends React.Component<IProps, IState> {
  constructor(props: IProps){
    super(props);
    this.state = {
      title: '',
    };
  }

  public render() {
    return (
      <div className={style.container}>
        <div className={style.mottoContainer}>
          <h4 className={style.brand}> Zooom Productions</h4>
          <p className={style.motto}> Building Better Brands</p>
          <Link className={style.mapLink} to={'map'}>Go to Map</Link>
        </div>
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
});

export const Home =  connect(null, mapDispatchToProps)(Home_Page);
