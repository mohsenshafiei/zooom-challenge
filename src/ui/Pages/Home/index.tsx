import * as React from 'react';
const style = require('./style.scss');
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import  { loginUserAction } from 'Store/User/actions';

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
      <div>
        <h1>Zooom</h1>
        <p>Building Better Brands</p>
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
});

export const Home =  connect(null, mapDispatchToProps)(Home_Page);
