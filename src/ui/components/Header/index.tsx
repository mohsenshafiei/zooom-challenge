import * as React from 'react';
import {
  openNavigationDrawer,
  closeNavigationDrawer
} from "store/ui/actions";
import {Dispatch} from "redux";
import {connect} from "react-redux";

const style = require('./style.scss');

interface IHeaderProps {
  navigation: boolean;
  openNavigation: () => {};
  closeNavigation: () => {};
}

interface IHeaderState {
}

export class DumbHeader extends React.PureComponent<IHeaderProps, IHeaderState> {
  render() {
    return (
      <header className={style.header}>
        <a href="#" className={style.title}>Zooom</a>
        <img
          src={
            this.props.navigation ?
            require('assets/images/cancel.png') :
            require('assets/images/lines.png')
          }
          className={
            this.props.navigation ?
              style.cancel :
              style.icon
          }
          onClick={ () => {
            this.props.navigation ?
              this.props.closeNavigation() :
              this.props.openNavigation();
          }}
        />
      </header>
    );
  }
}


const mapStateToProps = (state: any) => ({
  navigation: state.userInterface.navigation
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  openNavigation: () => {
    dispatch(openNavigationDrawer());
  },
  closeNavigation: () =>  {
    dispatch(closeNavigationDrawer());
  }
});

export const Header = connect(mapStateToProps, mapDispatchToProps)(DumbHeader);
