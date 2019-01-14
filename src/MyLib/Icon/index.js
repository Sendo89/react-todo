import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class MlIcon extends Component {
  render() {
    return (
      <FontAwesomeIcon
        icon={[ this.props.prefix, this.props.icon ]}
        size={ this.props.size }
        color={ this.props.color } />
      )
    }
}

MlIcon.defaultProps = {
  prefix: 'fas',
  color: 'inherit'
}

export default MlIcon
