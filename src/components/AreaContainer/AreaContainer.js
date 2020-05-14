import  React from 'react';
import './AreaContainer.css';
import Area from '../Area/Area';

const AreaContainer = ({areas}) => {

  const areasToDisplay = areas.map(area => {
    // let areaListings = [];
    const listingPromises = area.listings.map(listing => {
      area.listings = [];
      return fetch(`https://vrad-api.herokuapp.com${listing}`)
        .then(response => response.json())
        .then(info => area.listings.push(info))
        .catch(err => console.error(err))
    })
    Promise.all(listingPromises)
      .then(completeListingData => area.listings = completeListingData);
      // .then(listings => console.log(areaListings))
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
      />
    )
  })

  return (
    <section className="areas-container">
      {areasToDisplay}
    </section>
  )
}

export default AreaContainer;
