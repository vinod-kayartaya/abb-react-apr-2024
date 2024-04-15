import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer, { FooterWithBorder } from '../components/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Header />

      <div className='container'>
        <div className='row' style={{ minHeight: '500px' }}>
          <div className='col-4'>
            <Sidebar />
          </div>
          <div className='col-8'>
            <Outlet />
          </div>
        </div>
      </div>

      <Footer />
      {/* <FooterWithBorder /> */}
    </>
  );
};

export default Layout;
