import React, { Component } from 'react'
import MlIcon from 'MyLib/Icon'

class TodoItem extends Component {
  constructor () {
    super()

    this.handleNotDone = this.handleNotDone.bind(this)
    this.handleDone = this.handleDone.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleNotDone () {
    this.props.onNotDone(this.props.id)
  }

  handleDone () {
    this.props.onDone(this.props.id)
  }

  handleDelete () {
    this.props.onDelete(this.props.id)
  }

  render() {
    const statusBasedClasses = this.props.status === 'done' ? 'line-through text-green-dark' : 'text-grey-dark'
    const notDoneButtonClasses = this.props.status === 'not-done' ? 'text-white bg-grey' : 'text-grey bg-white'
    const doneButtonClasses = this.props.status === 'done' ? 'text-white bg-green' : 'text-green bg-white'

    return (
      <div className="TodoItem w-full flex my-4">
        <p
          className={`flex-1 ${statusBasedClasses}`}>
          { this.props.name }
        </p>

        <button
          className={`flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white border-grey hover:bg-grey ${notDoneButtonClasses}`}
          onClick={this.handleNotDone}>
          Not Done
        </button>

        <button
          className={`flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white border-green hover:bg-green ${doneButtonClasses}`}
          onClick={this.handleDone}>
          Done
        </button>

        <button
          className="flex-no-shrink p-2 ml-2 text-red hover:text-red-darker"
          onClick={this.handleDelete}>
          <MlIcon icon="times" />
        </button>
      </div>
    )
  }
}

export default TodoItem
