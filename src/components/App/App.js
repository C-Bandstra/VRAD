import  React, {Component} from 'react';
import './App.css';
import Login from '../Login/Login'
import AreaContainer from '../AreaContainer/AreaContainer'

// import { render } from '@testing-library/react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      current: 'login'
    }
  }


  render() {
    return (
      <div className="App">
        <Login />
      </div>
    );
  }
}

export default App;