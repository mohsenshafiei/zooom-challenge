import * as React from 'react';

const style = require('./style.scss');

interface ISearchBoxProps {
  changeInput: (input: string) => void
}

interface ISearchBoxState {
}

export class SearchBox extends React.PureComponent<ISearchBoxProps, ISearchBoxState> {
  constructor(props: ISearchBoxProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: any) {
    this.props.changeInput(e.target.value);
  }

  render() {
    return (
      <div className={style.searchBox}>
        <h4>Search Your Location</h4>
        <input
          className={style.searchBoxInput}
          placeholder={'Address, Zip Code, Country, City...'}
          onChange={
            (e) => {
              this.handleChange(e)
            }
          }
        />
      </div>
    );
  }
}
