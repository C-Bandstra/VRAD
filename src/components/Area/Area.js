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




// import React, {Component} from 'react';
// import './Area.css';
// import {Link} from "react-router-dom";
//
// class Area extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       listingData: []
//     }
//   }
//   componentDidMount() {
//     this.props.listings.map(listing => {
//       fetch(`https://vrad-api.herokuapp.com${listing}`)
//         .then(response => response.json())
//         .then(data => this.setState({
//           listingData: data
//         }))
//     })
//   }
//
//   render() {
//     return (
//       <section className="area-card">
//         <h3 className="area-header">{this.props.name} ({this.props.area})</h3>
//         <p className="area-about">{this.props.about}</p>
//         <Link to={`/Areas/${this.props.id}/Listings`}>
//           <button className="see-listings-button">View Listings</button>
//         </Link>
//     </section>
//   )
//   }
// }
//
// export default Area;
