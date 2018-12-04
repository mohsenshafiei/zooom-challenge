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
        <a href="#" className={style.title}>Zooom</a>
      </header>
    );
  }
}
