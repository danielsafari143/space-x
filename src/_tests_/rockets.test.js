import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import axios from 'axios';
import Items from './data';
import Rocket from '../components/Rockets';

jest.mock('axios');

const reducer = (state = {
  rockets: { rocket: Items },
}) => state;

const store = configureStore({ reducer });

describe('should test the rocket component', () => {
  it('should test the snapshot of the rocket component', () => {
    axios.get.mockResolvedValue({ data: Items });
    const navb = renderer.create(
      <MemoryRouter>
        <Provider store={store}>
          <Rocket />
        </Provider>
      </MemoryRouter>,
    ).toJSON();
    expect(navb).toMatchSnapshot();
  });
});
