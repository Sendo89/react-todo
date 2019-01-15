import React, { Component } from 'react'

class Welcome extends Component {
  render() {
    return (
      <div className="Welcome">
        <div className="mb-4">
          <div className="flex">
            <h1 className="flex-1 text-grey-darkest">
              Welcome!
            </h1>
          </div>
          <p className="text-grey-darkest my-4">
            This web application has been created with create-react-app and ejected for editing some configurations. Enjoy!
          </p>
        </div>
      </div>
    )
  }
}

export default Welcome
