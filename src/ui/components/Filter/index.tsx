import * as React from 'react';
const style = require('./style.scss');

interface IFilterProps {
  changeFilter: (option: number) => void;
}
interface IFilterState {
  title: string;
}

export class Filter extends React.PureComponent<IFilterProps, IFilterState> {
  constructor(props: IFilterProps) {
    super(props);
    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(option: number) {
    this.props.changeFilter(option);
  }

  render() {
    return (
      <div className={style.filter}>
        <div className={style.informationContainer}>
          <h4>Choose Your Category</h4>
          <div className={style.checkboxContainer}>
            <p className={style.checkBoxTitle}>First Category</p>
            <input
              className={style.checkBox}
              type="checkbox"
              onChange={ (e) => this.handleFilter(1)}
              defaultChecked={true}
            />
          </div>
          <div className={style.checkboxContainer}>
            <p className={style.checkBoxTitle}>Second Category</p>
            <input
              className={style.checkBox}
              type="checkbox"
              onChange={ (e) => this.handleFilter(2)}
              defaultChecked={true}
            />
          </div>
        </div>
      </div>
    );
  }
}
