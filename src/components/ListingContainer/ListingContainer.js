import React, {Component} from 'react';
import './ListingContainer.css';
import Listing from '../Listing/Listing';
import NavBar from '../NavBar/NavBar';

class ListingContainer extends Component {
  constructor(props) {
    super(props);
    this.mounted = false;
    this.state = {
      listingData: []
    }
  }

  listingsToDisplay = () => {
    let listings = this.state.listingData.map(listing => {
      return (
        <Listing {...listing} />
      )
    })
    return listings;
  }

  componentDidMount() {
    this.mounted = true;
    const listingPromises = this.props.listings.map(listing => {
      return fetch(`https://vrad-api.herokuapp.com${listing}`)
        .then(response => response.json())
        .then(data => {
          return {
            listing_id: data.listing_id,
            area_id: data.area_id,
            name: data.name,
            key: data.listing_id,
            address: data.address,
            details: data.details,
            dev_id: data.dev_id,
            area: data.area,
            db_connect: data.db_connect
          }
        })
    })
    Promise.all(listingPromises)
      .then(completeListingData => this.setState({listingData: completeListingData}))
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    return (
      <section className="listings-page">
        <NavBar
          title={`Listings for ${this.props.name} (${this.props.area})`}
          userInfo={this.props.userInfo}
          signOut={this.props.signOut}
        />
        <section className="listings-parent-container">
          {this.listingsToDisplay()}
        </section>
      </section>
    )
  }
}

export default ListingContainer;
