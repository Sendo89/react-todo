import React, { Component } from 'react'
import { Link, Switch, Route } from 'react-router-dom'

import MlIcon from 'MyLib/Icon'

import Welcome from 'components/Welcome'
import ToDoList from 'components/ToDoList'
import QuoteGenerator from 'components/QuoteGenerator'
import FormValidation from 'components/FormValidation'

class Main extends Component {
  render() {
    return (
      <div className="Main flex-1 w-full h-full flex flex-col">
        <header className="bg-black border-b border-white py-4">
          <div className="flex justify-between m-auto w-full lg:w-3/4 lg:max-w-320">
            <div>
              <MlIcon
                prefix="fab"
                icon="react"
                size="2x"
                color="white" />
            </div>

            <div className="flex-1 flex justify-end">
              <div className="p-2"><Link className="no-underline hover:underline text-white" to='/'>Welcome</Link></div>
              <div className="p-2"><Link className="no-underline hover:underline text-white" to='/todo-list'>TodoList</Link></div>
              <div className="p-2"><Link className="no-underline hover:underline text-white" to='/quote-generator'>Quote Generator</Link></div>
              <div className="p-2"><Link className="no-underline hover:underline text-white" to='/form-validation'>Form Validation</Link></div>
            </div>
          </div>
        </header>

        <div className="flex-1 flex flex-col items-center justify-start bg-grey-lightest font-sans">
          <div className="flex-1 flex flex-col bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-320">
            <Switch>
              <Route exact path='/' component={Welcome}/>
              <Route path='/todo-list' component={ToDoList}/>
              <Route path='/quote-generator' component={QuoteGenerator}/>
              <Route path='/form-validation' component={FormValidation}/>
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}

export default Main
