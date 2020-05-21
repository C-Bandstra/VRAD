import React from 'react'
import ReactDOM from 'react-dom'
import ListingContainer from './ListingContainer'
import NavBar from '../NavBar/NavBar'
import { render, fireEvent, waitForElement} from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import { MemoryRouter } from 'react-router-dom'
import { listingPromises } from '../../apiCalls'

jest.mock('../../apiCalls')



describe('Listing Container', () => {

  const userInfo = {
    name: 'Charlie',
    email: 'charlie@gmail.com',
    purpose: 'Business',
    favorites: []
  
  }

  const mockListing = [{
    "listing_id": 3,
    "area_id": 590,
    "name": "Hip RiNo Party Spot",
    "address": {
        "street": "2250 Lawrence St",
        "zip": 80205
    },
    "details": {
        "neighborhood_id": 5124122,
        "superhost": true,
        "seller_source": "91jss1",
         "beds": 3,
        "baths": 2.5,
        "cost_per_night": 420,
        "features": [
            "hot tub",
            "espresso machine"
        ]
    },
    "dev_id": "u4gh2j",
    "area": "rino",
    "db_connect": 834470
  }]

  const mockArea = {
    area: 'RiNo',
    details: {
      "id": 590,
      "name": "River North",
      "location": "North of Downtown Denver",
      "about": "RiNo is a burgeoning area with new bars, restaurants and event spaces popping up all the time. Explore this thriving area of Denver today!",
      "region_code": 6356834,
      "quick_search": "o5kod9f5cqo0",
      "listings": [
        "/api/v1/listings/3"
      ]
    },
    key: 590
  }

  it('should render without crashing', async () => {
    listingPromises.mockResolvedValueOnce(mockListing)

    const {getByText} = render(<MemoryRouter><ListingContainer {...mockArea} userInfo={userInfo} /></MemoryRouter>)
    const listing = await waitForElement(() => {
      return getByText("Hip RiNo Party Spot")
    })
    
    expect(listing).toBeInTheDocument()
  })
})