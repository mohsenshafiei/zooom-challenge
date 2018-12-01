import * as React from 'react';
const style = require('./style.scss');

interface IHeaderProps {
}
interface IHeaderState {
  title: string;
}

export class Header extends React.PureComponent<IHeaderProps, IHeaderState> {
  render() {
    return (
      <header className={style.header}>
        <p className={style.title}>Zooom</p>
      </header>
    );
  }
}
