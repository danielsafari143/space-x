import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Navbar from '../components/Navbar';

describe('Navbar component', () => {
  test('Renders correctly', () => {
    const tree = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
