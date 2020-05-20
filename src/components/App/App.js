import  React, {Component} from 'react';
import './App.css';
import Login from '../Login/Login'
import AreaContainer from '../AreaContainer/AreaContainer'
import ListingContainer from '../ListingContainer/ListingContainer';
import ListingDetails from '../ListingDetails/ListingDetails.js';
import FavoritesContainer from '../FavoritesContainer/FavoritesContainer';
import {Route, Redirect} from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.mounted = false;
    this.state = {
      current: 'login',
      areas: [],
      currentListing: {},
      userInfo: {
        name: '',
        email: '',
        purpose: '',
        favorites: []
      },
      isLoggedIn: false,
    }
  }

  setUserInfo = (user) => {
    this.setState({
      userInfo: user,
      isLoggedIn: true,
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

  signOut = () => {
    this.setState({
      userInfo: {
        name: '',
        email: '',
        purpose: '',
        favorites: []
      },
      isLoggedIn: false
    })
  }

  findArea = (id) => {
    return this.state.areas.find(area => {
      return area.details.id === parseInt(id)
    });
  }

  setCurrentListing = (listing) => {
   this.setState({currentListing: listing})
  }
  
  updateFavorites = (newFavorite, userInfo) => {
    this.setState({
      userInfo: {
        name: userInfo.name,
        email: userInfo.email,
        purpose: userInfo.purpose,
        favorites: [...this.state.userInfo.favorites, newFavorite]
      }
    })
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
            const areaToRender = this.findArea(id)
            return <ListingContainer
              {...areaToRender}
              userInfo={this.state.userInfo}
              signOut={this.signOut}
              setCurrentListing={this.setCurrentListing}
              updateFavorites={this.updateFavorites}
            />
        }} />
        <Route
          path='/Areas/:areaId/Listings/:listingId/ListingDetails' 
          exact render={() => {
            return  <ListingDetails userInfo={this.state.userInfo} signOut={this.signOut} {...this.state.currentListing}/>
          }} />
        <Route
          exact
          path="/Areas"
          render={() => <AreaContainer
            areas={this.state.areas}
            userInfo={this.state.userInfo}
            signOut={this.signOut}
           />}
        />
        <Route
          exact
          path="/Favorites"
          render={() => <FavoritesContainer
            userInfo={this.state.userInfo}
            signOut={this.signOut}
            setCurrentListing={this.setCurrentListing}
          />}
        />
        <Route exact path='/' render={() => <Login setUserInfo={this.setUserInfo} />}/>
      </div>
    );
  }
}
export default App;
