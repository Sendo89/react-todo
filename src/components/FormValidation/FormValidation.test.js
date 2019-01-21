import React from 'react'
import ReactDOM from 'react-dom'

import FormValidation from 'components/FormValidation'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<FormValidation />, div)
  ReactDOM.unmountComponentAtNode(div)
})
