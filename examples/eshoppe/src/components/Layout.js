import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Header />

      <div className='container' style={{ minHeight: '550px' }}>
        <div className='row'>
          <div className='col-3'>
            <Sidebar />
          </div>
          <div className='col-9'>
            <Outlet />
          </div>
        </div>
      </div>

      <div className='container'>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
