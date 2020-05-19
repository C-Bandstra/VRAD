import  React from 'react';
import './ListingDetails.css';

const ListingDetails = (props) => {
  console.log(props)
  const renderListingDetails = (props) => {
    return (`
      Number of beds: ${props.details.beds}
      `);
  }

  return (
    <section>
      {renderListingDetails()}
    </section>
  )
}

// Number of baths: ${props.details.baths}
// Cost per night: ${props.details.cost_per_night}

export default ListingDetails;