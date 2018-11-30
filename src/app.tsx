import * as React from 'react';
import * as ReactDOM from 'react-dom';
require('Styles/index.scss');
import store from './store';
import { Provider } from 'react-redux';
import { Router } from 'Ui/Router';

const ROOT_NODE: HTMLElement = document.getElementById('app') as HTMLElement;

ReactDOM.render(
  <Provider 
    store={store}>
        <Router/>
  </Provider>,
  ROOT_NODE,
);
