import React from 'react'
import ReactDOM from 'react-dom'

import prepareApplication from './app/bootstrap'

import Main from './Main'
import './styles/index.css'
import './styles/tailwind.css'

(async () => {
  await prepareApplication()

  ReactDOM.render(<Main />, document.getElementById('root'))
})()
