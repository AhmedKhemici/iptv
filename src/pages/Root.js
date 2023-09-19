import { Outlet } from 'react-router-dom';

import MainNavigation from '../components/NavBar/MainNavigation';
import Footer from '../components/Footer/Footer';

const RootLayout = () =>{

  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default RootLayout;