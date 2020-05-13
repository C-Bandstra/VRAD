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
    this.enableLoginButton();
  }

  trackPurpose = (e) => {
    let purpose = e.target.options[e.target.selectedIndex].value
    this.setState({purpose: purpose})
    this.enableLoginButton();
  }

  enableLoginButton = () => {
    const state = this.state;
    debugger;
    if (state.name && state.email && state.purpose) {
      this.props.checkForm(true);
    } else {
      this.props.checkForm(false);
    }
  }

  // If any of the forms are empty / unselected, display an error message
  // telling the user to complete the form.
  // Else, display the areas page.

  //on button click, change page while passing in this.state values

  render() {
    return (
      <section className="login-page">
          <h1>VRAD</h1>
        <section className="login-container">
          <section className="login-input-field">
          <h3 className="login-header">Sign In</h3>
            <input onChange={this.trackInput} id="name" placeholder="Name" className="login-input name-input"/>
            <input onChange={this.trackInput} id="email" placeholder="E-mail" className="login-input email-input"/>
            <div className="btn-container">
              <select onChange={this.trackPurpose} id="purpose" className="btn dropdown">
                <option value="business">Business</option>
                <option value="vacation">Vacation</option>
                <option value="other">Other</option>
              </select>
              <button className="btn login-btn">
                <Link to="Areas">
                  Login
                </Link>
              </button>
            </div>
          </section>
        </section>
      </section>
    )
  }
}

export default Login
