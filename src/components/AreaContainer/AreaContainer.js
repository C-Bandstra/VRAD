import  React from 'react';
import './AreaContainer.css';
import Area from '../Area/Area';

const AreaContainer = ({areas}) => {

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
    <section className="areas-container">
      {areasToDisplay}
    </section>
  )
}

export default AreaContainer;
