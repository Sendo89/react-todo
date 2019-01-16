import React, { Component } from 'react'
import axios from 'axios'

import MlIcon from 'MyLib/Icon'
import QuoteCard from 'components/QuoteGenerator/QuoteCard'

const getInitialState = () => {
  return {
    quoteNumber: 0,
    quotesList: []
  }
}

class QuoteGenerator extends Component {
  constructor () {
    super()

    this.state = getInitialState()
    this.handleRandomQuote = this.handleRandomQuote.bind(this)
  }

  handleRandomQuote () {
    const randomNumber = window.faker.random.number({ min: 0, max: this.state.quotesList.length })

    this.setState({ quoteNumber: randomNumber })
  }

  async componentDidMount() {
    const quotesList = await this.getQuotesList()

    this.setState({ quotesList })
  }

  async getQuotesList () {
    const quotesList = await axios.get('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')

    return quotesList.data.quotes
  }

  render () {
    const quotes = []

    this.state.quotesList.forEach((quote, index) => {
      quotes.push(<QuoteCard key={index} text={quote.quote} author={quote.author} />)
    })

    const displayQuote = quotes[this.state.quoteNumber]

    return (
      <div className="ToDoList flex-1 w-full h-full flex flex-col">
        <div className="my-8">
          <div className="flex">
            <h1 className="flex-1 text-grey-darkest">
              Quote Generator
            </h1>
            <button
              className="flex-no-shrink p-2 px-4 border-2 rounded text-black border-black hover:text-white hover:bg-black"
              onClick={this.handleRandomQuote}>
              <MlIcon
                icon="random"
                size="xs" />
              <span className="ml-4">Get random quote!</span>
            </button>
          </div>
          <p className="text-grey-darkest my-4">
            This example is a simple quote generator. In this case, I am using <span className="markup-code">axios</span> for making a request to a github gist from camperbot.
          </p>
        </div>

        <div className="flex-1 flex flex-col items-center justify-start">
          <div className="flex-1 flex flex-col items-center justify-start">
            { displayQuote }
          </div>
        </div>

      </div>
    )
  }
}

export default QuoteGenerator
