import * as React from "react";
const style = require("./style.scss");

interface IFooterProps {}
interface IFooterState {}

export class Footer extends React.PureComponent<IFooterProps, IFooterState> {
  render() {
    return (
      <footer className={style.footer}>
        <a className={style.copyRight} href="#">
          All Rights Reserved &copy Zooom Productions | 2018
        </a>
      </footer>
    );
  }
}
