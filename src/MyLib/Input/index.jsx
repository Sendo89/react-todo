import React, { Component } from 'react'

import MlIcon from 'MyLib/Icon'

class MlInput extends Component {
  state = {
    value: ''
  }

  handleChange = async (event) => {
    await this.setState({ value: event.target.value })

    this.props.onChange(this.state.value)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ value: nextProps.value })
  }

  renderIconField() {
    if(!!this.props.iconName) {
      return (
        <span className="flex items-center leading-normal bg-grey-lighter rounded rounded-r-none border border-r-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-sm">
          <MlIcon
            prefix={this.props.iconPrefix}
            icon={this.props.iconName}
            size={this.props.iconSize}
            color={this.props.iconColor} />
        </span>
      )
    }

    return null
  }

  renderErrorContainer() {
    if(!!this.props.error) {
      const errorClasses = this.props.iconName ? 'ml-12' : ''

      return (
        <span className={`whitespace-no-wrap text-red text-xs ${errorClasses}`}>
          {this.props.error}
        </span>
      )
    }

    return null
  }

  render () {
    return (
      <div className="MlInput flex flex-col flex-wrap items-stretch w-full mb-4 relative">
        <div className="flex-1 flex -mr-px">
          <div className="flex -mr-px">
            { this.renderIconField() }
          </div>
          <input
            value={this.state.value}
            type={this.props.type || 'text'}
            className="w-full leading-normal w-px flex-1 border h-10 border-grey-light rounded rounded-l-none px-3 relative focus:border-blue focus:shadow"
            placeholder={this.props.placeholder}
            onChange={this.handleChange} />
        </div>
        <div className="h-4">
          { this.renderErrorContainer() }
        </div>
      </div>
    )
  }
}

export default MlInput
