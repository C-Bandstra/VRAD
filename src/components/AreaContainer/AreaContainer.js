import  React from 'react';
import './AreaContainer.css';
import Area from '../Area/Area';

const AreaContainer = ({areas}) => {

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
