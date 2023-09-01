import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Missions from '../Mission/mission'

const mockStore = configureStore([thunk]);

test('renders Missions correctly', () => {
  const store = mockStore({
    missions: {
      isLoading: false,
      missions: [
        { id: 1, name: 'Mission 1', description: 'Description 1' },
        { id: 2, name: 'Mission 2', description: 'Description 2' },
      ],
      joinedMissions: [1],
    },
  });

  const { asFragment } = render(
    <Provider store={store}>
      <Missions />
    </Provider>,
  );

  expect(asFragment()).toMatchSnapshot();
});