import React from 'react';
import './Listing.css';
import {Link} from "react-router-dom";

const Listing = (props) => {
  const imagePath = `/images/${props.listing_id}_a.jpg`;

  const url = window.location.pathname;

  const sendCurrentListing = () => {
    props.setCurrentListing(props)
  }

  return (
    <section className="listing-card">
      <section className="listing-header-container">
        <h4 className="listing-header">{props.name}</h4>
      </section>
      <section className="listing-img-container">
        <img src={imagePath} className="listing-img"/>
      </section>
      <section className="listing-button-container">
      <Link onClick={sendCurrentListing} className="expand-listing-button" to={`${url}/${props.listing_id}/ListingDetails`}>
        View Details
      </Link>
      </section>
    </section>
  )
}

export default Listing;
