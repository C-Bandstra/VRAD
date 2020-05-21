import React from 'react'
import ReactDOM from 'react-dom'
import Login from './Login'
import { render, fireEvent} from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import { MemoryRouter } from 'react-router-dom'

describe('Login', () => {
const userInfo = {
  name: 'Charlie',
  email: 'charlie@gmail.com',
  purpose: 'Business',
  favorites: []

}

  it('should render without crashing', () => {
    const { getByText } = render(<MemoryRouter><Login /></MemoryRouter>)

    const header = getByText('Vacation Rentals Around Denver')

    expect(header).toBeInTheDocument()
  })

  it('Should track the input values', () => {
    const { getByPlaceholderText } = render(<MemoryRouter><Login /></MemoryRouter>)

    const nameInput = getByPlaceholderText('Name')
    fireEvent.change(nameInput, { target: { value: 'Charlie' } })

    expect(nameInput.value).toEqual('Charlie')
  })

  it('Should handle the login', () => {
    const mockSetUserInfo = jest.fn()

    const { getByPlaceholderText, getByText , getByDisplayValue} = render(<MemoryRouter><Login setUserInfo={mockSetUserInfo} /></MemoryRouter>)

    const nameInput = getByPlaceholderText('Name')
    fireEvent.change(nameInput, { target: { value: 'Charlie' } })

    const emailInput = getByPlaceholderText('E-mail')
    fireEvent.change(emailInput, { target: { value: 'charlie@gmail.com' } })

    const purposeSelect = getByDisplayValue('Purpose')
    fireEvent.change(purposeSelect, { target: { value: 'Business' } })

    const loginBtn = getByText('Login')
    fireEvent.click(loginBtn)

    expect(mockSetUserInfo).toHaveBeenCalled()
    expect(mockSetUserInfo).toHaveBeenCalledWith(userInfo)
  })
})