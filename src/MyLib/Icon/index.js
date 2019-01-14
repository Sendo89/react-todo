import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class MlIcon extends Component {
  render() {
    return (
      <div>
        <FontAwesomeIcon
          icon={[ this.props.prefix, this.props.icon ]}
          size={ this.props.size }
          color={ this.props.color } />
      </div>
      )
    }
}


MlIcon.defaultProps = {
  prefix: 'fas',
  color: 'inherit'
}

export default MlIcon
