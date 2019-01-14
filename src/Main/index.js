import React, { Component } from 'react'
import AddItemsSection from '../components/ToDoList/AddItemsSection'
import ItemsListSection from '../components/ToDoList/ItemsListSection'
import MlIcon from '../MyLib/Icon'

class Main extends Component {
  render() {
    return (
      <div className="Main flex-1 w-full bg-black h-full flex flex-col">
        <header className="border-b border-white py-4">
          <div className="text-right">
            <MlIcon prefix="fab" icon="react" size="2x" color="white" />
          </div>
        </header>

        <div className="flex-1">
          <AddItemsSection />

          <ItemsListSection />
        </div>
      </div>
    )
  }
}

export default Main
