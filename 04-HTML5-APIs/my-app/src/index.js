import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './movies-redux/reducers'
import AppMovie from  './movies-redux/components/AppMovie'
const store = createStore(rootReducer)

render(
  <Provider store={store}>
    <AppMovie />
  </Provider>,
  document.getElementById('root')
)

