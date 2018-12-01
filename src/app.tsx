import * as React from 'react';
import * as ReactDOM from 'react-dom';
require('Styles/index.scss');
import store from './store';
import { Provider } from 'react-redux';
import { Router } from 'Ui/Router';
import { Header } from 'Ui/Components/Header';


const ROOT_NODE: HTMLElement = document.getElementById('app') as HTMLElement;

ReactDOM.render(
  <Provider
    store={store}>
      <>
        <Header/>
        <Router/>
      </>
  </Provider>,
  ROOT_NODE,
);
