import  React from 'react';
import './ListingDetails.css';
import NavBar from '../NavBar/NavBar';


const ListingDetails = (props) => {
  const features = props.details.features.map(feature => {
    return (
    <p className="feature">{`-${feature}`}</p>
    )
  })
  return (
    <section data-testid='details-page' className="listing-details-page">
      <NavBar
            title={`Details for ${props.name} (${props.area})`}
            userInfo={props.userInfo}
            signOut={props.signOut}
          />
      <section className="listing-details">
        <div className="listing-image-container">
          <h3 className="image-header">Listing Images</h3>
          <img alt='' className="listing-image" src={`/images/${props.listing_id}_a.jpg`} />
          <img alt='' className="listing-image" src={`/images/${props.listing_id}_b.jpg`} />
          <img alt='' className="listing-image" src={`/images/${props.listing_id}_c.jpg`} />
        </div>
        <div className="details-container">
          <h2 className="listing-detail-header" >Listing Info</h2>
          <p className="listing-detail">Address - {props.address.street}, {props.address.zip}</p>
          <p className="listing-detail">Beds - {props.details.beds}</p>
          <p className="listing-detail">Baths - {props.details.baths}</p>
          <p className="listing-detail">Cost Per Night - ${props.details.cost_per_night}.00</p>
          <div>
          <h3 className="feature-header">Features</h3>
            {features}
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In cursus turpis massa tincidunt dui. Quis varius quam quisque id diam vel quam. Pretium aenean pharetra magna ac placerat.</p>
        </div>
      </section>
    </section>
  )
}

export default ListingDetails;