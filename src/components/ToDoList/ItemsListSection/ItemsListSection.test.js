import React from 'react'
import ReactDOM from 'react-dom'

import ItemsListSection from 'components/ToDoList/ItemsListSection'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ItemsListSection />, div)
  ReactDOM.unmountComponentAtNode(div)
})
