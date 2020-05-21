import React, {Component} from 'react';
import './ListingContainer.css';
import Listing from '../Listing/Listing';
import NavBar from '../NavBar/NavBar';
import { listingPromises } from '../../apiCalls'


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
        <Listing setCurrentListing={this.props.setCurrentListing} key={listing.listing_id} {...listing} findListing={this.findListing} />
      )
    })
    return listings;
  }

  fetchListings = async () => {
    this.mounted = true;
    const completeListingData = await listingPromises(this.props)
    Promise.all(completeListingData)
      .then(completeListingData => this.setState({listingData: completeListingData})
    )
  }

  findListing = (id) => {
    const foundListing = this.state.listingData.find(listing => {
      return listing.listing_id === parseInt(id)
    })
    this.props.updateFavorites(foundListing, this.props.userInfo)
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
        <NavBar
          title={`${this.props.userInfo.purpose} Listings for ${this.props.details.name} (${this.props.area})`}
          userInfo={this.props.userInfo}
          signOut={this.props.signOut}
        />
        <section className="listings-container">
          {this.listingsToDisplay()}
        </section>
      </section>
    )
  }
}

export default ListingContainer;
