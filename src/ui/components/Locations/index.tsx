import * as React from "react";
const style = require("./style.scss");

interface ILocationsProps {
  children: React.ReactNode;
}
interface ILocationsState {}

export class Locations extends React.PureComponent<
  ILocationsProps,
  ILocationsState
> {
  render() {
    return (
      <>
        <div className={style.container}>
          <div className={style.column}>{this.props.children}</div>
        </div>
      </>
    );
  }
}
