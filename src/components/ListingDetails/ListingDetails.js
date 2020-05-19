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

export default ListingDetails;