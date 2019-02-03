import React, { Component } from 'react'
import MlIcon from 'MyLib/Icon'

import cardBackground from 'app/assets/images/react-code.png'
import reactLogo from 'app/assets/images/logo.svg'

class Welcome extends Component {
  handleGithubClick = () => {
    window.open('https://github.com/sendoabll/react-examples', '_blank')
  }

  render () {
    return (
      <div className="Welcome flex-1 flex flex-col">
        <div className="my-8">
          <div className="flex">
            <h1 className="flex-1 text-grey-darkest">
              Welcome!
            </h1>
          </div>
          <p className="text-grey-darkest my-4">
            This web application has been created with create-react-app and ejected for editing some configurations. Enjoy!
          </p>
        </div>

        <div className="flex-1 flex flex-col items-center justify-start">
          <div className="rounded rounded-t-lg overflow-hidden shadow max-w-80 my-3">
              <img
                className="w-full blur-2"
                src={cardBackground}
                alt="Card background" />
              <div className="flex justify-center -mt-8">
                  <img
                    className="relative w-24 h-24 bg-white rounded-full border-solid border-grey border -mt-3"
                    src={reactLogo}
                    alt="React" />
              </div>
            <div className="text-center px-3 pb-6 pt-2">
              <h3 className="text-black text-sm bold font-sans">@sendoabll</h3>
            </div>
            <div className="flex justify-center pb-3 text-grey-dark">
              <div
                className="text-center hover:text-grey-darkest cursor-pointer"
                onClick={this.handleGithubClick}>
                <MlIcon prefix="fab" icon="github" size="lg" />
                <div className="mt-2">Github</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Welcome
