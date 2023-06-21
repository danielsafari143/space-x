import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Rockets from '../components/Rockets';
import store from '../store';

describe('Rockets component', () => {
  test('Renders correctly', () => {
    const tree = render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
