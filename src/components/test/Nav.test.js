import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; 
import '@testing-library/jest-dom/extend-expect';
import Navigations from '../Navigations';


test('renders navigation links', () => {
  const { getByText, getByAltText } = render(
    <BrowserRouter>
      <Navigations />
    </BrowserRouter>
  );

  // Check if the logo image is present
  const logoImage = getByAltText('planet-logo');
  expect(logoImage).toBeInTheDocument();

  // Check if navigation links are present
  const rocketsLink = getByText('Rockets');
  const missionsLink = getByText('Missions');
  const dragonsLink = getByText('Dragons');
  const profileLink = getByText('My Profile');

  expect(rocketsLink).toBeInTheDocument();
  expect(missionsLink).toBeInTheDocument();
  expect(dragonsLink).toBeInTheDocument();
  expect(profileLink).toBeInTheDocument();
});
