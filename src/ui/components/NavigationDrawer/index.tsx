import * as React from 'react';
const style = require('./style.scss');


interface INavigationDrawerProps {
  children: React.ReactNode,
  visible: boolean
}
interface INavigationDrawerState {
}

export class NavigationDrawer extends React.PureComponent<INavigationDrawerProps, INavigationDrawerState> {
  constructor(props: INavigationDrawerProps) {
    super(props);
  }
  render() {
    return (
      <>
        <div className={this.props.visible ? style.openNavigationDrawer : style.closeNavigationDrawer}>
          <div className={style.column}>
            {this.props.children}
            </div>
        </div>
      </>
    );
  }
}
