import React from 'react'
import ReactDOM from 'react-dom'

import QuoteGenerator from 'components/QuoteGenerator'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<QuoteGenerator />, div)
  ReactDOM.unmountComponentAtNode(div)
})
