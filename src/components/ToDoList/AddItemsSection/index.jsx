import React, { Component } from 'react'

class AddItemsSection extends Component {
  constructor (props) {
    super(props)

    this.state = {
      task: props.task
    }
  }

  componentDidMount () {
    this.refs.inputItemAdd.focus()
  }

  handleChange = (event) => {
    this.setState({
      task: {
        ...this.state.task,
        name: event.target.value
      }
    })
  }

  handleItemAdd = (event) => {
    event.preventDefault()
    this.props.onItemAdd(this.state.task)

    this.setState({ task: { ...this.state.task, name: '' } })

    this.refs.inputItemAdd.focus()
  }

  handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      this.handleItemAdd(event)
    }
  }

  render() {
    return (
      <div className="AddItemsSection">
        <div className="flex mt-4">
          <input
            ref="inputItemAdd"
            value={ this.state.task.name }
            onChange={this.handleChange}
            className="shadow border rounded w-full py-2 px-3 mr-4 text-grey-darker"
            placeholder="Add Todo"
            onKeyPress={this.handleKeyPress} />

          <button
            className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal"
            onClick={this.handleItemAdd}>
            Add
          </button>
        </div>
      </div>
    )
  }
}

export default AddItemsSection
