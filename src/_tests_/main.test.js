import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Main from '../components/Main';

describe('Main component', () => {
  test('Renders correctly', () => {
    const tree = render(
      <MemoryRouter>
        <Main />
      </MemoryRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
