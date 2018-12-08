import * as React from 'react';
import * as ReactDOM from 'react-dom';
require('styles/index.scss');
import store from './store';
import { Provider } from 'react-redux';
import { Router } from 'ui/router';
import { Header } from 'ui/components/Header';


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
