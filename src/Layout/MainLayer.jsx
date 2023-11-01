import NavBar from '../Shared/NavBar/NavBar';
import { Outlet } from 'react-router-dom';

function MainLayer() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

export default MainLayer