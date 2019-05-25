import React, { Component } from 'react'

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  }

  handleChange = (e) => {

    this.setState({
      [e.target.id]: e.target.value
    })
    console.log(this.state);

  }


  handleSubmit = (e) => {
    e.preventDefault();

    console.log(this.state);

  }


  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">
            Sign Up
          </h5>

          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              onChange={this.handleChange}
              type="email"
              id="email" />
          </div>

          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              onChange={this.handleChange}
              type="password"
              id="password" />
          </div>

          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input
              onChange={this.handleChange}
              type="text"
              id="firstName" />
          </div>

          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input
              onChange={this.handleChange}
              type="text"
              id="lastName" />
          </div>


          <div className="input">
            <button className="btn pink lighten-1 z-depth-0">Login</button>
          </div>

        </form>
      </div>
    )
  }
}

export default SignUp;
