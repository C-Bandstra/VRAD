import  React from 'react';
import './Area.css';
import { Link } from "react-router-dom";

const Area = (props) => {
  return (
    <section className="area-card">
      <h3 className="area-header">{props.name} ({props.area})</h3>
      <p className="area-about">{props.about}</p>
      <Link to={`/Areas/${props.id}/Listings`}>
        <button className="see-listings-button">View Listings</button>
      </Link>
    </section>
  )
}

export default Area;
