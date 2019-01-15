import React, { Component } from 'react'
import AddItemsSection from 'components/ToDoList/AddItemsSection'
import ItemsListSection from 'components/ToDoList/ItemsListSection'
import MlIcon from 'MyLib/Icon'

const getInitialState = () => {
  const initialTaskNumber = window.faker.random.number({ min: 1, max: 5 })
  const taskList = []

  for (var i = 0; i < initialTaskNumber; i++) {
    taskList.push({
      id: i,
      name: window.faker.lorem.sentence(),
      status: 'not-done'
    })
  }

  return {
    taskList,
    currentTask: {
      id: null,
      name: '',
      status: 'not-done'
    }
  }
}

class Main extends Component {
  constructor () {
    super()
    this.state = getInitialState()

    this.handleReset = this.handleReset.bind(this)
    this.handleItemAdd = this.handleItemAdd.bind(this)
    this.handleNotDone = this.handleNotDone.bind(this)
    this.handleDone = this.handleDone.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleReset () {
    this.setState(getInitialState())
  }

  handleItemAdd (data) {
    const taskId = !!this.state.taskList[this.state.taskList.length - 1] ?
      (this.state.taskList[this.state.taskList.length - 1].id + 1) :
      1

    const taskList = [
      ...this.state.taskList,
      {
        ...data,
        id: taskId
      }
    ]

    this.setState({ taskList: taskList })

    this.setState({
      currentTask: {
        id: null,
        name: '',
        status: 'not-done'
      }
    })
  }

  handleBackButton () {
    window.location.href = window.history.back()
  }

  handleNotDone (taskId) {
    const taskIndex = this.findTaskIndex(taskId)
    const updatedTask = [{ ...this.state.taskList[taskIndex], status: 'not-done' }]
    const taskList = this.updateTaskList(taskIndex, updatedTask)

    this.setState({ taskList: taskList })
  }

  handleDone (taskId) {
    const taskIndex = this.findTaskIndex(taskId)
    const updatedTask = [{ ...this.state.taskList[taskIndex], status: 'done' }]
    const taskList = this.updateTaskList(taskIndex, updatedTask)

    this.setState({ taskList: taskList })
  }

  handleDelete (taskId) {
    const taskIndex = this.findTaskIndex(taskId)
    const taskList = this.updateTaskList(taskIndex)

    this.setState({ taskList: taskList })
  }

  findTaskIndex (taskId) {
    return this.state.taskList.findIndex(taskFromList => {
      return taskFromList.id === taskId
    })
  }

  updateTaskList (taskIndex, updatedTask = []) {
    return [
      ...this.state.taskList.slice(0, taskIndex),
      ...updatedTask,
      ...this.state.taskList.slice(taskIndex + 1)
    ]
  }

  render() {
    return (
      <div className="ToDoList flex-1 w-full h-full flex flex-col">
        <div className="mb-4">
          <div className="flex">
            <h1 className="flex-1 text-grey-darkest">
              Todo List
            </h1>
            <button
              className="flex-no-shrink p-2 px-4 border-2 rounded text-black border-black hover:text-white hover:bg-black"
              onClick={this.handleReset}>
              <MlIcon
                icon="sync-alt"
                size="xs" />
              <span className="ml-4">Reset</span>
            </button>
          </div>
          <p className="text-grey-darkest my-4">
            This is a simple todo list example. There is some fake data generated with FakerJs. Feel free to add or remove new data. If you want to reset this initial configuration, with another random data, just press 'Reset' button. Enjoy!
          </p>

          <AddItemsSection
            onItemAdd={this.handleItemAdd}
            task={this.state.currentTask} />
        </div>

        <ItemsListSection
          className="flex-1"
          taskList={this.state.taskList}
          onNotDone={this.handleNotDone}
          onDone={this.handleDone}
          onDelete={this.handleDelete} />
      </div>
    )
  }
}

export default Main
