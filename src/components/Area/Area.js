import  React from 'react';
import './Area.css';

const Area = (props) => {
  return (
    <section className="area-card">
      <h3 className="area-header">{props.name} ({props.area})</h3>
      <p className="area-about">{props.about}</p>
      <button id={props.id} className="see-listings-button">View Listings</button>
    </section>
  )
}

export default Area;
