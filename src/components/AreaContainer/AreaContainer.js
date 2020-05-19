import  React from 'react';
import './AreaContainer.css';
import Area from '../Area/Area';
import ListingContainer from '../ListingContainer/ListingContainer';
import {Route, Redirect} from "react-router-dom";

const AreaContainer = ({areas, displayListings, currentListings}) => {
  const areasToDisplay = areas.map(area => {
    return (
      <Area
        area={area.area}
        details={area.details}
        id={area.details.id}
        key={area.id}
        name={area.details.name}
        location={area.details.location}
        about={area.details.about}
        listings={area.details.listings}
        // displayListings={displayListings}
        // currentListings={currentListings}
      />
    )
  })

  return (
    <section className="areas-container">
      {areasToDisplay}
      {/*<Route
        path='/Areas/:id/Listings'
        render={({match}) => {
            const {id} = match.params;
            const areaToRender = areas.find(area => {
              return area.id === parseInt(id)
            });
            console.log('area', areaToRender);
            return <ListingContainer {...areaToRender} />
          }
        }
      />*/}
      {/*<Route
        path='/Areas'
        exact
        render={() => <AreaContainer areas={areas} />}
      />*/}
    </section>
  )
}

export default AreaContainer;
