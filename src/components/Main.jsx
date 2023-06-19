import { Outlet } from 'react-router';
import Navbar from './Navbar';

const Main = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

export default Main;
