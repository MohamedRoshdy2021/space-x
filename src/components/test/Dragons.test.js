import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Dragons from '../Dragons';

const mockStore = configureStore([thunk]);

test('matches snapshot for Dragons component', () => {
    const store = mockStore({
      dragons: {
        isLoading: false,
        data: [
          {
            id: 1,
            name: 'Dragon 1',
            description: 'Description 1',
            image: 'dragon1.jpg',
          },
          {
            id: 2,
            name: 'Dragon 2',
            description: 'Description 2',
            image: 'dragon2.jpg',
          },
        ],
        joinedDragons: [1],
      },
    });
  
    const { asFragment } = render(
      <Provider store={store}>
        <Dragons />
      </Provider>,
    );
  
    expect(asFragment()).toMatchSnapshot();
  });