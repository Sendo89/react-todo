import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'

import prepareApp from 'app/bootstrap'

import Main from 'src/Main'
import 'styles/tailwind.css'

(async () => {
  await prepareApp()

  ReactDOM.render(
    <HashRouter>
      <Main />
    </HashRouter>,
    document.getElementById('root'))
})()
