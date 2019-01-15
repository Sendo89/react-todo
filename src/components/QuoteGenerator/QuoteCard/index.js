import React, { Component } from 'react'

class QuoteCard extends Component {
  render () {
    return (
      <div className="QuoteCard">
        <div className="max-w-xs sm:max-w-sm mt-8 mx-auto bg-grey-light rounded-lg shadow p-8">
          <h2 className="italic text-right text-grey-darkest leading-normal">
            { this.props.text }
          </h2>
          <p className="text-left pt-8 text-grey-darker">
            { this.props.author }
          </p>
        </div>
      </div>
    )
  }
}

export default QuoteCard
