import React from 'react'
import ReactDOM from 'react-dom'
import Listing from './Listing'
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"


describe('Listing', () => {

  const features = ["hot tub", "espresso machine"]

  const listing = { 
    address: {street: "2250 Lawrence St", zip: "80205"},
    area: "rino",
    area_id: 590,
    db_connect: 834470,
    details: { beds: 3, baths: 2.5, cost_per_night: 420, features: features},
    dev_id: "u4gh2j",
    key: 3,
    listing_id: 3,
    name: "Hip RiNo Party Spot"
}

  it('should render without crashing', () => {
    const {getByText} = render(<Listing {...listing} />)
    const header = getByText("Hip RiNo Party Spot")
    expect(header).toBeInTheDocument()
  })
})