import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import prepareModules from './modules/bootstrap'

import Main from './Main'
import './styles/tailwind.css'

(async () => {
  await prepareModules()

  ReactDOM.render(
    <BrowserRouter>
      <Main />
    </BrowserRouter>,
    document.getElementById('root'))
})()
