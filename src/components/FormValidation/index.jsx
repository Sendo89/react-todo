import React, { Component } from 'react'

import MlInput from 'MyLib/Input'
import MlIcon from 'MyLib/Icon'

const INVALID_USERNAME = 'Please, enter a valid username'
const INVALID_BIRTHDATE = 'Please, enter a valid birthdate'
const INVALID_EMAIL = 'Please, enter a valid email'
const INVALID_PASSWORD = 'Please, enter a valid password'

const getInitialState = () => {
  return {
    isSubmited: false,
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
  constructor () {
    super()
    this.state = getInitialState()
  }

  handleReset = async () => {
    await this.setState(getInitialState())
  }

  handleUsernameInput = async (value) => {
    await this.setState({ username: value })

    if (this.state.username.length < 3) {
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

    if (!!this.state.birthdate.lenght && this.state.birthdate.length < 3) {
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

    if (!!this.state.email.lenght && this.state.email.length < 3) {
      this.setStateFormError({ email: 'Please, enter a valid email' })
    } else if (!emailRegex.test(value)) {
      this.setStateFormError({ email: 'Invalid email format' })
    } else {
      this.setStateFormError({ email: '' })
    }
  }

  handlePasswordInput = async (value) => {
    await this.setState({ password: value })

    if (!!this.state.password.lenght && this.state.password.length < 3) {
      this.setStateFormError({ password: 'Please, use more than 3 characters' })
    } else if (this.state.password.length > 12) {
      this.setStateFormError({ password: 'Please, use less than 12 characters' })
    } else {
      this.setStateFormError({ password: '' })
    }
  }

  handleSubmit = async (value) => {
    await this.setState({ 'isSubmited': true })

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

  render () {
    const resolveValidationText = (field) => this.state.isSubmited ? !!field ? 'Error' : 'Ok' : ''

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
          <div className="w-1/2 mr-4 flex flex-col items-start justify-start">
            <MlInput
              placeholder="Name"
              iconName="user"
              value={this.state.username}
              error={this.state.isSubmited && this.state.formErrors.username}
              onChange={this.handleUsernameInput} />

            <MlInput
              placeholder="Birthdate (dd/mm/yyyy)"
              iconName="birthday-cake"
              value={this.state.birthdate}
              error={this.state.isSubmited && this.state.formErrors.birthdate}
              onChange={this.handleBirthdateInput} />

            <MlInput
              placeholder="Email"
              iconName="at"
              value={this.state.email}
              error={this.state.isSubmited && this.state.formErrors.email}
              onChange={this.handleEmailInput} />

            <MlInput
              type="password"
              placeholder="Password"
              iconName="key"
              value={this.state.password}
              error={this.state.isSubmited && this.state.formErrors.password}
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
          <div className="w-1/2 ml-4 flex flex-col items-start justify-start">
            <div className="w-full flex-1 border border-grey ml-4 flex flex-col items-start justify-start">
              <table className="w-full text-left">
              <thead>
                  <tr>
                      <th className="py-4 px-6 bg-grey-lighter font-sans font-medium uppercase text-sm text-grey border-b border-grey-light">Key</th>
                      <th className="py-4 px-6 bg-grey-lighter font-sans font-medium uppercase text-sm text-grey border-b border-grey-light text-center">Value</th>
                      <th className="py-4 px-6 bg-grey-lighter font-sans font-medium uppercase text-sm text-grey border-b border-grey-light">Status</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td className="py-4 px-6 border-b border-grey-light">Username</td>
                      <td className="py-4 px-6 border-b border-grey-light text-center">{this.state.username}</td>
                      <td className="py-4 px-6 border-b border-grey-light text-center">{resolveValidationText(this.state.formErrors.username)}</td>
                  </tr>
                  <tr>
                      <td className="py-4 px-6 border-b border-grey-light">Birthdate</td>
                      <td className="py-4 px-6 border-b border-grey-light text-center">{this.state.birthdate}</td>
                      <td className="py-4 px-6 border-b border-grey-light text-center">{resolveValidationText(this.state.formErrors.birthdate)}</td>
                  </tr>
                  <tr>
                      <td className="py-4 px-6 border-b border-grey-light">Email</td>
                      <td className="py-4 px-6 border-b border-grey-light text-center">{this.state.email}</td>
                      <td className="py-4 px-6 border-b border-grey-light text-center">{resolveValidationText(this.state.formErrors.email)}</td>
                  </tr>
                  <tr>
                      <td className="py-4 px-6 border-b border-grey-light">Password</td>
                      <td className="py-4 px-6 border-b border-grey-light text-center">{this.state.password}</td>
                      <td className="py-4 px-6 border-b border-grey-light text-center">{resolveValidationText(this.state.formErrors.password)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FormValidation
