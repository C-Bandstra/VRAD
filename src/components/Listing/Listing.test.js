import React from 'react'
import ReactDOM from 'react-dom'
import Listing from './Listing'
import NavBar from '../NavBar/NavBar'
import { render, fireEvent} from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import { MemoryRouter } from 'react-router-dom'

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

  const userInfo = {
    name: 'Charlie',
    email: 'blah',
    purpose: "business",
    favorites: []
  }

  it('should render without crashing', () => {
    const {getByText} = render(<MemoryRouter><Listing {...listing} /></MemoryRouter>)
    const header = getByText("Hip RiNo Party Spot")
    expect(header).toBeInTheDocument()
  })

  it('favorite listing button should be clickable', () => {
    const mockFindListing = jest.fn()
    const {getByText} = render(<MemoryRouter><Listing findListing={mockFindListing} {...listing} /></MemoryRouter>)
    const favBtn = getByText("Favorite This Listing")
    fireEvent.click(favBtn);
    expect(mockFindListing).toHaveBeenCalledWith(3);
  })

  it('View details button should be clickable', () => {
    const mockSetListing = jest.fn()
    const {getByText} = render(<MemoryRouter><Listing setCurrentListing={mockSetListing} {...listing} /></MemoryRouter>)
    const detailsBtn = getByText("View Details")
    fireEvent.click(detailsBtn);
    expect(mockSetListing).toHaveBeenCalled();
  })
})
