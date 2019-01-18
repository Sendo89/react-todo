import React, { Component } from 'react'
import ToDoItem from 'components/ToDoList/ItemsListSection/ToDoItem'

class ItemsListSection extends Component {
  handleNotDone = (taskId) => {
    this.props.onNotDone(taskId)
  }

  handleDone = (taskId) => {
    this.props.onDone(taskId)
  }

  handleDelete = (taskId) => {
    this.props.onDelete(taskId)
  }

  render () {
    const todoItems = this.props.taskList.map(task => {
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
        { todoItems }
      </div>
    )
  }
}

export default ItemsListSection
