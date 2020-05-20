import  React from 'react';
import './Area.css';
import { Link } from "react-router-dom";

const Area = (props) => {
  return (
    <section className="area-card">
      <section className="area-header-container">
        <h3 className="area-header">{props.details.name} ({props.area})</h3>
      </section>
      <section className="area-about-container">
        <p className="area-about">{props.details.about}</p>
      </section>
      <section className="area-button-container">
      <Link to={`/Areas/${props.details.id}/Listings`}>
        <button className="see-listings-button">View Listings</button>
      </Link>
      </section>
    </section>
  )
}

export default Area;
