import React from 'react'
import ReactDOM from 'react-dom'
import AreaContainer from './AreaContainer';
import NavBar from '../NavBar/NavBar'
import {render} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import {MemoryRouter} from 'react-router-dom';

describe('AreaContainer', () => {

  const area1 = {
    area: 'RiNo',
    details: {
      name: 'River North',
      area: 'RiNo',
      about: 'RiNo is a hip art district just north of downtown.',
      id: 1
    },
    key: 1
  }

  const area2 = {
    area: 'Cap Hill',
    details: {
      name: 'Capitol Hill',
      area: 'Cap Hill',
      about: 'Cap Hill is a bustling neighborhood in the heart of downtown',
      id: 2
    },
    key: 2
  }

  const userInfo = {
    name: 'Collin',
    email: 'collin.kallery@colorado.edu',
    purpose: 'Vacation',
    favorites: []
  }

  it('Should render without crashing', () => {
    const {getByText} = render(
      <MemoryRouter>
        <AreaContainer
          areas={[area1, area2]}
          userInfo={userInfo}
        />
      </MemoryRouter>);
    const rinoHeader = getByText('River North (RiNo)');
    const capHeader = getByText('Capitol Hill (Cap Hill)');

    expect(rinoHeader).toBeInTheDocument();
    expect(capHeader).toBeInTheDocument();
  });
});
