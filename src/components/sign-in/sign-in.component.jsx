import React, { Component } from "react"

import "./sign-in.styles.scss"

import { signInWithGoogle } from "../../firebase/firebase.utils"

import FormInput from "../form-input/form-input.component"
import CustomButton from "../custom-button/custom-button.component"

export default class SignIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: ""
    }
  }

  handleSubmit = event => {
    event.preventDefault()

    this.setState({ email: "", password: "" })
  }

  handleChange = event => {
    const { value, name } = event.target

    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            value={this.state.email}
            required
            type='email'
            handleChange={this.handleChange}
            label='email'
          />

          <FormInput
            name='password'
            value={this.state.password}
            required
            type='password'
            handleChange={this.handleChange}
            label='password'
          />

          <div className='buttons'>
            <CustomButton type='submit'>Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}
