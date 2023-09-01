import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Make sure to include this line
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Profile from '../Profile'; // Adjust the path as needed

const mockStore = configureStore([]);

test('should render reserved rockets', () => {
  const store = mockStore({
    missions: {
      missions: [
        {
          id: 1,
          name: 'Mission 1',
        },
        {
          id: 2,
          name: 'Mission 2',
        },
      ],
      joinedMissions: [1],
    },
    dragons: {
      data: [],
      joinedDragons: [],
    },
    rockets: {
      reservedRockets: [1],
      data: [
        {
          id: 1,
          rocket_name: 'Rocket 1',
        },
        {
          id: 2,
          rocket_name: 'Rocket 2',
        },
      ],
    },
  });

  render(
    <Provider store={store}>
      <Profile />
    </Provider>
  );

  expect(screen.getByText('Rocket 1')).toBeInTheDocument();
  expect(screen.queryByText('Rocket 2')).not.toBeInTheDocument();
});
