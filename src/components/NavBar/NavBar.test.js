import React from 'react'
import ReactDOM from 'react-dom'
import {render} from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import {MemoryRouter} from 'react-router-dom'
import NavBar from './NavBar';

describe('NavBar', () => {

  const userInfo = {
    name: 'Collin Kallery',
    email: 'collin.kallery@colorado.edu',
    purpose: 'Business',
    favorites: []
  }

  it('Should render without crashing', () => {
    const {getByText} = render(
      <MemoryRouter>
        <NavBar
          title={`${userInfo.purpose} Testing Title`}
          userInfo={userInfo}
        />
      </MemoryRouter>
    );
    const navBarTitle = getByText('Business Testing Title');

    expect(navBarTitle).toBeInTheDocument();
  });
})
