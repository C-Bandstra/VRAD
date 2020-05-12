import  React from 'react';
import './Login.css';

const Login = () => {
  return (
    <section className="login-page">
        <h1>VRAD</h1>
      <section className="login-container">
        <section className="login-input-field">
          <input placeholder="Name" className="login-input name-input"/>
          <input placeholder="E-mail" className="login-input email-input"/>
          <select>
            <option value="business">Business</option>
            <option value="vacation">Vacation</option>
            <option value="other">Other</option>
          </select>
          <button className="login-btn">Login</button>
        </section>
      </section>
    </section>

  )
}
export default Login