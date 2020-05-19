import React, {Component} from 'react';
import './ListingContainer.css';
import Listing from '../Listing/Listing';

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
        <Listing key={listing.listing_id} {...listing} />
      )
    })
    return listings;
  }

  fetchListings = async () => {
    this.mounted = true;
    const listingPromises = await this.props.details.listings.map(async listing => {
      const response = await fetch(`https://vrad-api.herokuapp.com${listing}`)
      const listingData = await response.json()
      return await listingData
    })
    Promise.all(listingPromises)
      .then(completeListingData => this.setState({listingData: completeListingData}))
  }

  componentDidMount() {
    this.fetchListings()
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    return (
      <section className="listings-page">
        <h2 className="listings-header">Listings for {this.props.name} ({this.props.area})</h2>
          <section className="listing-container">
            {this.listingsToDisplay()}
          </section>
      </section>
    )
  }
}

export default ListingContainer;
