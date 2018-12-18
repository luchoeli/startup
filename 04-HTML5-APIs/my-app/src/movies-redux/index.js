import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import AppMovie from './components/AppMovie'

const store = createStore(rootReducer)

render(
  <Provider store={store}>
    <AppMovie />
  </Provider>,
  document.getElementById('root')
)