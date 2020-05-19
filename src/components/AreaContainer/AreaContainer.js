import  React from 'react';
import './AreaContainer.css';
import Area from '../Area/Area';
import ListingContainer from '../ListingContainer/ListingContainer';
import NavBar from '../NavBar/NavBar';
import {Route, Redirect} from "react-router-dom";

const AreaContainer = ({areas, userInfo, signOut}) => {

  const areasToDisplay = areas.map(area => {
    return (
      <Area
        area={area.area}
        details={area.details}
        key={area.details.id}
      />
    )
  })

  return (
    <section className="areas-page">
      <NavBar
        title={`Neighborhoods in Denver for ${userInfo.purpose} Rentals`}
        userInfo={userInfo}
        signOut={signOut}
      />
      <section className="areas-container">
        {areasToDisplay}
      </section>
    </section>
  )
}

export default AreaContainer;
