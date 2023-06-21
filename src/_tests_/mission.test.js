import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import axios from 'axios';
import renderer from 'react-test-renderer';
import Mission from '../components/Mission';
import missionItem from './missionData';

jest.mock('axios');

const reducer = (state = { mission: { mission: missionItem } }) => state;

const store = configureStore({ reducer });

describe('Should render correctly', () => {
  it('It should get all mission loaded', async () => {
    axios.get.mockResolvedValue({ data: missionItem });
    const tree = renderer.create(
      <Provider store={store}>
        <Mission />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
