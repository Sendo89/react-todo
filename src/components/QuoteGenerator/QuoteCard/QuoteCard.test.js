import React from 'react'
import ReactDOM from 'react-dom'

import QuoteCard from 'components/QuoteGenerator/QuoteCard'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<QuoteCard />, div)
  ReactDOM.unmountComponentAtNode(div)
})
