import  React, {Component} from 'react';
import './Login.css';
import {Route, Link} from "react-router-dom";


class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      purpose: '',
    }
  }

  trackInput = (e) => {
    const keyword = e.target.id
    this.setState({[keyword]: e.target.value})
  }

  trackPurpose = (e) => {
    let purpose = e.target.options[e.target.selectedIndex].value
    this.setState({purpose: purpose})
  }

  handleLogin = (e) => {
    e.preventDefault();
    this.props.setUserInfo(this.state);
  }

  // If any of the forms are empty / unselected, display an error message
  // telling the user to complete the form.
  // Else, display the areas page.

  //on button click, change page while passing in this.state values

  render() {
    return (
      <section className="login-page">
          <h1>Vacation Rentals Around Denver</h1>
        <section className="login-container">
          <section className="login-input-field">
            <form onSubmit={this.handleLogin}>
              <h3 className="login-header">Sign In</h3>
              <input required onChange={this.trackInput} id="name" placeholder="Name" className="login-input name-input"/>
              <input required onChange={this.trackInput} id="email" placeholder="E-mail" className="login-input email-input"/>
              <div className="btn-container">
                <select required onChange={this.trackPurpose} id="purpose" className="btn dropdown">
                  <option value="">Purpose</option>
                  <option value="business">Business</option>
                  <option value="vacation">Vacation</option>
                  <option value="other">Other</option>
                </select>
                <button className="btn login-btn">
                  Login
                </button>
              </div>
            </form>
          </section>
        </section>
      </section>
    )
  }
}

export default Login
