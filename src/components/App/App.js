import  React, {Component} from 'react';
import './App.css';
import Login from '../Login/Login'
import AreaContainer from '../AreaContainer/AreaContainer'
import ListingContainer from '../ListingContainer/ListingContainer';
import {Route, Redirect} from "react-router-dom";
// import { render } from '@testing-library/react';
class App extends Component {
  constructor() {
    super();
    this.mounted = false;
    this.state = {
      current: 'login',
      areas: [],
      listings: [],
      userInfo: {
        name: '',
        email: '',
        purpose: ''
      },
      isLoggedIn: false,
    }
  }
  
  setUserInfo = (user) => {
    this.setState({
      userInfo: user,
      isLoggedIn: true
    })
  }

  fetchAreas = async () => {
    this.mounted = true;
    const response = await fetch('https://vrad-api.herokuapp.com/api/v1/areas')
    const areaData = await response.json()
    const areaPromises = areaData.areas.map(async areaData => {
      return {
        area: areaData.area,
        details: await this.fetchDetails(areaData.details)
      }
    })
    Promise.all(areaPromises)
    .then(areaInfo => this.setState({areas: areaInfo}))
  }

  fetchDetails = async (details) => {
    const response = await fetch(`https://vrad-api.herokuapp.com${details}`)
    const data = await response.json();
    return await data
  }

  componentDidMount() {
    this.fetchAreas()
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    return (
      <div className="App">
        {!this.state.isLoggedIn ?
          <Redirect to="/" /> :
          <Redirect to="/Areas" />}
          <Route
          path='/Areas/:id/Listings'
          exact render={({match}) => {
            const { id } = match.params;
            const areaToRender = this.state.areas.find(area => {
              return area.details.id === parseInt(id)
            });
            return <ListingContainer {...areaToRender} />
        }} />
        <Route exact path="/Areas" render={() => <AreaContainer areas={this.state.areas} />} />
        <Route exact path='/' render={() => <Login setUserInfo={this.setUserInfo} />}/>
      </div>
    );
  }
}
export default App;
