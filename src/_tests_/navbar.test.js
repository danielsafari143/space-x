import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

describe('should test the navbar', () => {
  it('should test the snapshot of the navbar', () => {
    const navb = renderer.create(<MemoryRouter><Navbar /></MemoryRouter>).toJSON();
    expect(navb).toMatchSnapshot();
  });
});
