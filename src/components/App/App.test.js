import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Login from '../Login/Login'
import { render, fireEvent, waitForElement} from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import { MemoryRouter } from 'react-router-dom'
import { listingPromises } from '../../apiCalls'

describe('App', () => {

  const userInfo = {
    name: 'Charlie',
    email: 'charlie@gmail.com',
    purpose: 'Business',
    favorites: []
  
  }

  it('Should be able to render without crashing', () => {

    const {getByText} = render(<MemoryRouter><App /></MemoryRouter>)
  
    const header = getByText("Vacation Rentals Around Denver")
  
    expect(header).toBeInTheDocument()
  })

  it('Should route user to area page after login', async () => {
    const mockSetUserInfo = jest.fn()

    const { getByPlaceholderText, getByText , getByDisplayValue, getAllByText} = render(<MemoryRouter><App /></MemoryRouter>)

    const nameInput = getByPlaceholderText('Name')
    fireEvent.change(nameInput, { target: { value: 'Charlie' } })

    const emailInput = getByPlaceholderText('E-mail')
    fireEvent.change(emailInput, { target: { value: 'charlie@gmail.com' } })

    const purposeSelect = getByDisplayValue('Purpose')
    fireEvent.change(purposeSelect, { target: { value: 'Business' } })

    const loginBtn = getByText('Login')
    fireEvent.click(loginBtn)

    const listingButtons = await waitForElement(() => {
      return getAllByText("View Listings")
    })

    expect(listingButtons[0]).toBeInTheDocument()
  })

  it('should navigate to the listing container when a user clicks button', async () => {
    const mockSetUserInfo = jest.fn()

    const { getByPlaceholderText, getByText , getByDisplayValue, getAllByText} = render(<MemoryRouter><App /></MemoryRouter>)

    const nameInput = getByPlaceholderText('Name')
    fireEvent.change(nameInput, { target: { value: 'Charlie' } })

    const emailInput = getByPlaceholderText('E-mail')
    fireEvent.change(emailInput, { target: { value: 'charlie@gmail.com' } })

    const purposeSelect = getByDisplayValue('Purpose')
    fireEvent.change(purposeSelect, { target: { value: 'Business' } })

    const loginBtn = getByText('Login')
    fireEvent.click(loginBtn)

    const listingButtons = await waitForElement(() => {
      return getAllByText("View Listings")
    })

    fireEvent.click(listingButtons[0])

    const detailsButtons = await waitForElement(() => {
      return getAllByText("View Details")
    })

    expect(detailsButtons[0]).toBeInTheDocument()

  })

  it('should navigate to the listing details when a user clicks button', async () => {
    const mockSetUserInfo = jest.fn()

    const { getByPlaceholderText, getByText , getByDisplayValue, getAllByText, getByTestId} = render(<MemoryRouter><App /></MemoryRouter>)

    const nameInput = getByPlaceholderText('Name')
    fireEvent.change(nameInput, { target: { value: 'Charlie' } })

    const emailInput = getByPlaceholderText('E-mail')
    fireEvent.change(emailInput, { target: { value: 'charlie@gmail.com' } })

    const purposeSelect = getByDisplayValue('Purpose')
    fireEvent.change(purposeSelect, { target: { value: 'Business' } })

    const loginBtn = getByText('Login')
    fireEvent.click(loginBtn)

    const listingButtons = await waitForElement(() => {
      return getAllByText("View Listings")
    })

    fireEvent.click(listingButtons[0])

    const detailsButtons = await waitForElement(() => {
      return getAllByText("View Details")
    })

    fireEvent.click(detailsButtons[0])

    const image = getByTestId('[data-testid="details-page"]')

    expect(image).toBeInTheDocument()

  })

})


