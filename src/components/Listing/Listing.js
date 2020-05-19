import React from 'react';
import './Listing.css';

const Listing = (props) => {

  const imagePath = `/images/${props.listing_id}_a.jpg`;

  return (
    <section className="listing-card">
      <section className="listing-header-container">
        <h4 className="listing-header">{props.name}</h4>
      </section>
      <section className="listing-img-container">
        <img src={imagePath} className="listing-img"/>
      </section>
      <section className="listing-button-container">
        <button className="expand-listing-button">View Details</button>
      </section>
    </section>
  )
}

export default Listing;
