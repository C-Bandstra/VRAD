import  React from 'react';
import './Area.css';

const Area = (props) => {
  return (
    <section className="area-card">
      <h3 className="area-header">{props.name}</h3>
      <p>{props.about}</p>
      <button className="see-listings-button">View Listings</button>
    </section>
  )
}

export default Area;
