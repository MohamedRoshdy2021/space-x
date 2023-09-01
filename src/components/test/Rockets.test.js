import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Rockets from '../Rockets'; // Make sure to use the correct import path

const mockStore = configureStore([thunk]);

test('matches snapshot for Rockets component', () => {
  const store = mockStore({
    rockets: {
      isLoading: false,
      data: [
        {
          id: 1,
          rocket_name: 'Rocket 1',
          description: 'Description 1',
          flickr_images: 'rocket1.jpg',
        },
        {
          id: 2,
          rocket_name: 'Rocket 2',
          description: 'Description 2',
          flickr_images: 'rocket2.jpg',
        },
      ],
      reservedRockets: [1],
    },
  });

  const { asFragment } = render(
    <Provider store={store}>
      <Rockets />
    </Provider>,
  );

  expect(asFragment()).toMatchSnapshot();
});
