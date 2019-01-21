import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'

import prepareModules from 'modules/bootstrap'

import Main from 'src/Main'
import 'styles/tailwind.css'

(async () => {
  await prepareModules()

  ReactDOM.render(
    <HashRouter>
      <Main />
    </HashRouter>,
    document.getElementById('root'))
})()
