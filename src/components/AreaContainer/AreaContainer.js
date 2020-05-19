import  React from 'react';
import './AreaContainer.css';
import Area from '../Area/Area';
import ListingContainer from '../ListingContainer/ListingContainer';
import NavBar from '../NavBar/NavBar';
import {Route, Redirect} from "react-router-dom";

const AreaContainer = ({areas, displayListings, currentListings, userInfo}) => {

  const areasToDisplay = areas.map(area => {
    return (
      <Area
        area={area.area}
        details={area.details}
        id={area.id}
        key={area.id}
        name={area.name}
        location={area.location}
        about={area.about}
        region_code={area.region_code}
        quick_search={area.quick_search}
        listings={area.listings}
        displayListings={displayListings}
        currentListings={currentListings}
      />
    )
  })

  return (
    <section className="areas-page">
      <NavBar
        title={`Neighborhoods in Denver for ${userInfo.purpose} Rentals`}
        userInfo={userInfo}
      />
      <section className="areas-container">
        {areasToDisplay}
      </section>
    </section>
  )
}

export default AreaContainer;
