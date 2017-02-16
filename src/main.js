import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import {Provider} from 'react-redux'
import createSagaMiddleware from 'redux-saga'
//import devTools from 'remote-redux-devtools'


import Gallery from './components/Gallery'
//import DevTools from './components/DevTools'
import reducer from './reducers'

import {watchLoadImages} from './sagas';

const store = createStore(
  reducer,
  applyMiddleware(createSagaMiddleware(watchLoadImages))
  //DevTools.instrument(),
);

ReactDOM.render(
  <Provider store={store}>
    <Gallery />
  </Provider>,
  document.getElementById('root')
);
