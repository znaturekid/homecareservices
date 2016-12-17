import 'react-hot-loader/patch';
import { AppContainer } from 'react-hot-loader';
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import configureStore from 'stores/ConfigStore';
// Onsen UI Styling and Icons
require('onsenui/stylus/blue-basic-theme.styl');
require('onsenui/css/onsenui.css');

import App from './pages/App';
const initialState = {
  job: {
    list: [
      { TicketId: 1, Title: 'title abc aa', CustomerName: 'Quang abc', TicketStatus: 1 }
    ]
  }
}
const store = configureStore(initialState);
const rootElement = document.getElementById('app');
ReactDOM.render(
    
  <Provider store={store}>
      <App/>
  </Provider>,
    
  rootElement
);

if (module.hot) {
  module.hot.accept('./pages/App', () => {
    const NextApp = require('./pages/App').default;
    ReactDOM.render(
        
      <Provider store={store}>
          <NextApp/>
      </Provider>,
        
      rootElement
    );
  });
}
