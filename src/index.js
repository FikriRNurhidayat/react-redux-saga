import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

/* Redux Store */
import store from './store'

/* Configuration */
import './config/array'
import './config/axios'
import * as serviceWorker from './config/serviceWorker'

/* Component */
import Router from './router'

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider> ,
  document.getElementById('root')
)

serviceWorker.unregister()
