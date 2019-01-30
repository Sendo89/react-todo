import React, { Component } from 'react'

import MlInput from 'MyLib/Input'
import MlIcon from 'MyLib/Icon'

const INVALID_USERNAME = 'Please, enter a valid username'
const INVALID_BIRTHDATE = 'Please, enter a valid birthdate'
const INVALID_EMAIL = 'Please, enter a valid email'
const INVALID_PASSWORD = 'Please, enter a valid password'

const getInitialState = () => {
  return {
    isSubmitted: false,
    isValid: false,
    username: '',
    birthdate: '',
    email: '',
    password: '',
    formErrors: {
      username: INVALID_USERNAME,
      birthdate: INVALID_BIRTHDATE,
      email: INVALID_EMAIL,
      password: INVALID_PASSWORD
    }
  }
}

class FormValidation extends Component {
  state = getInitialState()

  handleReset = async () => {
    await this.setState(getInitialState())
  }

  handleUsernameInput = async (value) => {
    await this.setState({ username: value })

    if (!this.state.username.length || this.state.username.length < 3) {
      this.setStateFormError({ username: 'Please, use more than 3 characters' })
    } else if (this.state.username.length > 12) {
      this.setStateFormError({ username: 'Please, use less than 12 characters' })
    } else {
      this.setStateFormError({ username: '' })
    }
  }

  handleBirthdateInput = async (value) => {
    await this.setState({ birthdate: value })
    const birthdateRegex = RegExp(/^((0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/[12]\d{3})$/)

    if (!this.state.birthdate.length || this.state.birthdate.length < 3) {
      this.setStateFormError({ birthdate: 'Please, enter a valid birthdate' })
    } else if (!birthdateRegex.test(value)) {
      this.setStateFormError({ birthdate: 'Invalid birthdate format, use dd/mm/yyyy' })
    } else {
      this.setStateFormError({ birthdate: '' })
    }
  }

  handleEmailInput = async (value) => {
    await this.setState({ email: value })
    const emailRegex = RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

    if (!this.state.email.length || this.state.email.length < 3) {
      this.setStateFormError({ email: 'Please, enter a valid email' })
    } else if (!emailRegex.test(value)) {
      this.setStateFormError({ email: 'Invalid email format' })
    } else {
      this.setStateFormError({ email: '' })
    }
  }

  handlePasswordInput = async (value) => {
    await this.setState({ password: value })

    if (!this.state.password.length || this.state.password.length < 3) {
      this.setStateFormError({ password: 'Please, use more than 3 characters' })
    } else if (this.state.password.length > 12) {
      this.setStateFormError({ password: 'Please, use less than 12 characters' })
    } else {
      this.setStateFormError({ password: '' })
    }
  }

  handleSubmit = async (value) => {
    await this.setState({ 'isSubmitted': true })

    const formIsValid = Object.keys(this.state.formErrors).every((key, othr) => {
      return this.state.formErrors[key] === ''
    })

    if (formIsValid) {
      await this.setState({ 'isValid': true })
    } else {
      await this.setState({ 'isValid': false })
    }
  }

  setStateFormError = async (error = {}) => {
    await this.setState({
      formErrors: {
        ...this.state.formErrors,
        ...error
      }
    })
  }

  renderValidFormMessage = () => {
    return (
      <div className="w-full flex-1 flex py-4 border-b border-grey-light">
        <div className="bg-green h-12 w-full flex items-center justify-center text-white px-6">
          Valid! FOrm submitted.
        </div>
      </div>
    )
  }

  renderErrorFormMessage = () => {
    return (
      <div className="w-full flex-1 flex py-4 border-b border-grey-light">
        <div className="bg-red h-12 w-full flex items-center justify-center text-white px-6">
          Error! Try again.
        </div>
      </div>
    )
  }

  render () {
    const resolveValidationText = (field) => this.state.isSubmitted ? !!field ? 'Error' : 'Ok' : ''

    const renderValidFormMessage = () => {
      if (this.state.isSubmitted && this.state.isValid) {
        return this.renderValidFormMessage()
      }

      if (this.state.isSubmitted && !this.state.isValid) {
        return this.renderErrorFormMessage()
      }
    }

    return (
      <div className="FormValidation flex-1 w-full h-full flex flex-col">
        <div className="my-8">
          <div className="flex">
            <h1 className="flex-1 text-grey-darkest">
              Form validation
            </h1>
            <button
              className="flex-no-shrink p-2 px-4 border-2 rounded text-black border-black hover:text-white hover:bg-black"
              onClick={this.handleReset}>
              <MlIcon
                icon="eraser"
                size="sm" />
              <span className="ml-4">Clean form</span>
            </button>
          </div>
          <p className="text-grey-darkest my-4">
            This example is a simple form validator. There are some validations with a couple of <span className="markup-code">regular expresions</span> that user must pass to get the form validated. Good luck!
          </p>
        </div>

        <div className="flex-1 flex items-between justify-start">
          <div className="w-1/2 flex pr-2 flex-col items-start justify-start">
            <MlInput
              placeholder="Name"
              iconName="user"
              value={this.state.username}
              error={this.state.isSubmitted && this.state.formErrors.username}
              onChange={this.handleUsernameInput} />

            <MlInput
              placeholder="Birthdate (dd/mm/yyyy)"
              iconName="birthday-cake"
              value={this.state.birthdate}
              error={this.state.isSubmitted && this.state.formErrors.birthdate}
              onChange={this.handleBirthdateInput} />

            <MlInput
              placeholder="Email"
              iconName="at"
              value={this.state.email}
              error={this.state.isSubmitted && this.state.formErrors.email}
              onChange={this.handleEmailInput} />

            <MlInput
              type="password"
              placeholder="Password"
              iconName="key"
              value={this.state.password}
              error={this.state.isSubmitted && this.state.formErrors.password}
              onChange={this.handlePasswordInput} />

              <button
                className="self-center mt-8 flex-no-shrink p-2 px-4 border-2 rounded text-green border-green hover:text-white hover:bg-green"
                onClick={this.handleSubmit}>
                <MlIcon
                  icon="eraser"
                  size="sm" />
                <span className="ml-4">Validate</span>
              </button>
          </div>
          <div className="w-1/2 flex pl-2">
            <div className="w-1/2 flex flex-col items-start justify-start flex-1 border border-grey">
              <div className="w-full text-left flex flex-col">
                <div className="w-full flex-1 flex">
                  <div className="w-1/3 py-4 px-6 bg-grey-lighter font-sans font-medium uppercase text-sm text-grey border-b border-grey-light">Key</div>
                  <div className="w-1/3 py-4 px-6 bg-grey-lighter font-sans font-medium uppercase text-sm text-grey border-b border-grey-light">Value</div>
                  <div className="w-1/3 py-4 px-6 bg-grey-lighter font-sans font-medium uppercase text-sm text-grey border-b border-grey-light">Status</div>
                </div>
                <div>
                  <div className="w-full flex-1 flex py-4 border-b border-grey-light">
                    <div className="w-1/3 px-6">Username</div>
                    <div className="w-1/3 px-6">{this.state.username}</div>
                    <div className="w-1/3 px-6">{resolveValidationText(this.state.formErrors.username)}</div>
                  </div>
                  <div className="w-full flex-1 flex py-4 border-b border-grey-light">
                    <div className="w-1/3 px-6">Birthdate</div>
                    <div className="w-1/3 px-6">{this.state.birthdate}</div>
                    <div className="w-1/3 px-6">{resolveValidationText(this.state.formErrors.birthdate)}</div>
                  </div>
                  <div className="w-full flex-1 flex py-4 border-b border-grey-light">
                    <div className="w-1/3 px-6">Email</div>
                    <div className="w-1/3 px-6">{this.state.email}</div>
                    <div className="w-1/3 px-6">{resolveValidationText(this.state.formErrors.email)}</div>
                  </div>
                  <div className="w-full flex-1 flex py-4 border-b border-grey-light">
                    <div className="w-1/3 px-6">Password</div>
                    <div className="w-1/3 px-6">{this.state.password}</div>
                    <div className="w-1/3 px-6">{resolveValidationText(this.state.formErrors.password)}</div>
                  </div>
                  { renderValidFormMessage() }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FormValidation
