import  React, {Component} from 'react';
import './App.css';
import Login from '../Login/Login'
import AreaContainer from '../AreaContainer/AreaContainer'
import {Route, Redirect} from "react-router-dom";


// import { render } from '@testing-library/react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      current: 'login',
      areas: [],
      userInfo: {
        name: '',
        email: '',
        purpose: ''
      },
      isLoggedIn: false
    }
  }

  componentDidMount() {
    fetch('https://vrad-api.herokuapp.com/api/v1/areas')
      .then(response => response.json())
      .then(areaData => {
        const areaPromises = areaData.areas.map(area => {
          return fetch(`https://vrad-api.herokuapp.com${area.details}`)
            .then(response => response.json())
            .then(info => {
              return {
                area: area.area,
                details: area.details,
                id: info.id,
                name: info.name,
                location: info.location,
                about: info.about,
                region_code: info.region_code,
                quick_search: info.quick_search,
                listings: info.listings
              }
            })
        })
        Promise.all(areaPromises)
          .then(completeAreaData => this.setState({areas: completeAreaData}))
      })
      .catch(err => console.error(err))
  }

  setUserInfo = ({name, email, purpose}) => {
    this.setState({
      userInfo: {
        name,
        email,
        purpose
      },
      isLoggedIn: true
    })
    console.log('hi');
  }

  render() {
    return (
      <div className="App">
        {!this.state.isLoggedIn ?
          <Redirect to="/" /> :
          <Redirect to="/Areas" />}
        <Route path="/Areas" render={() => <AreaContainer areas={this.state.areas} />} />
        <Login setUserInfo={this.setUserInfo} />
      </div>
    );
  }
}

export default App;
