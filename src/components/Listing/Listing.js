import React from 'react';
import './Listing.css';

const Listing = ({name}) => {
  return (
    <section className="listing-card">
      <p>{name}</p>
    </section>
  )
}

export default Listing;
