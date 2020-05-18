import React from 'react';
import './Listing.css';

const Listing = (props) => {

  const renderListingDetails = () => {
      return (`
        Number of beds: ${props.details.beds}
        Number of baths: ${props.details.baths}
        Cost per night: ${props.details.cost_per_night}
        `);
  }

  console.log('hi', renderListingDetails());

  return (
    <section className="listing-card">
      <h4>{props.name}</h4>
      <section className="listing-details-container">
        {renderListingDetails()}
      </section>
    </section>
  )
}

export default Listing;
