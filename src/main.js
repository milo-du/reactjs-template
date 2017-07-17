/*
 * @Author: Milodu
 * @Date:   2017-06-23 16:00:21
 * @Last Modified by:   Milodu
 * @Last Modified time: 2017-07-10 17:45:46
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoApp from './reducers';
import App from './containers/App';

const store = createStore(todoApp);

ReactDOM.render(
  <Provider store={store}>    
    <App />
  </Provider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}