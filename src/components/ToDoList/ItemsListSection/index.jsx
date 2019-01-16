import React, { Component } from 'react'
import ToDoItem from 'components/ToDoList/ItemsListSection/ToDoItem'

class ItemsListSection extends Component {
  constructor () {
    super()
    this.handleNotDone = this.handleNotDone.bind(this)
    this.handleDone = this.handleDone.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleNotDone (taskId) {
    this.props.onNotDone(taskId)
  }

  handleDone (taskId) {
    this.props.onDone(taskId)
  }

  handleDelete (taskId) {
    this.props.onDelete(taskId)
  }

  render() {
    const rows = this.props.taskList.map(task => {
      return <ToDoItem
        key={task.id}
        id={task.id}
        name={task.name}
        status={task.status}
        onNotDone={this.handleNotDone}
        onDone={this.handleDone}
        onDelete={this.handleDelete} />
    })

    return (
      <div className="ItemsListSection flex flex-col items-center">
        { rows }
      </div>
    )
  }
}

export default ItemsListSection
