import React from 'react'
import { render } from 'react-dom'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store'
import './index.css'
import App from './containers/app'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import 'font-awesome/css/font-awesome.min.css'
import './static/styles/base/index.css'

const target = document.getElementById('root')

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
)
