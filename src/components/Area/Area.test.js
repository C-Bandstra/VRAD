import React from 'react'
import ReactDOM from 'react-dom'
import Area from './Area'
import {render} from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import {MemoryRouter} from 'react-router-dom'

describe('Area', () => {

  const area1Details = {
    name: 'River North',
    area: 'RiNo',
    about: 'RiNo is a hip art district just north of downtown.',
    id: 1
  }

  const area1 = {
    area: 'RiNo',
    details: area1Details,
    key: 1
  }

  it('Should render without crashing', () => {
    const {getByText} = render(<MemoryRouter><Area {...area1}/></MemoryRouter>);
    const areaHeader = getByText('River North (RiNo)');

    expect(areaHeader).toBeInTheDocument();
  });

  it('Should have an about section for the area', () => {
    const {getByText} = render(<MemoryRouter><Area {...area1}/></MemoryRouter>);
    const areaAbout = getByText('RiNo is a hip art district just north of downtown.');

    expect(areaAbout).toBeInTheDocument();
  })

  it('Should have a clickable View Listings button', () => {
    const {getByText} = render(<MemoryRouter><Area {...area1}/></MemoryRouter>);
    const areaButton = getByText('View Listings');

    expect(areaButton).toBeInTheDocument();
  });
});
