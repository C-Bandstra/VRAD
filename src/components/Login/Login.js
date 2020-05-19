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
                  <option value="Business">Business</option>
                  <option value="Vacation">Vacation</option>
                  <option value="Other">Other</option>
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
