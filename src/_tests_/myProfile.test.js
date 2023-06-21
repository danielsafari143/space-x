import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import axios from 'axios';
import Items from './data';
import MyProfile from '../components/MyProfile';
import missionItem from './missionData';

jest.mock('axios');

const reducer = (state = {
  mission: { mission: missionItem },
  rockets: { rocket: Items },
}) => state;

const store = configureStore({ reducer });

describe('should test MyProfile', () => {
  it('should test the snapshot of main page', () => {
    axios.get.mockResolvedValue({ data: missionItem });
    axios.get.mockResolvedValue({ data: Items });
    const navb = renderer.create(
      <MemoryRouter>
        <Provider store={store}>
          <MyProfile />
        </Provider>
      </MemoryRouter>,
    ).toJSON();
    expect(navb).toMatchSnapshot();
  });
});
