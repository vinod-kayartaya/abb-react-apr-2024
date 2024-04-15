import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import CustomerLayout from './layouts/CustomerLayout';
import AboutLayout from './layouts/AboutLayout';
import LoginForm from './components/LoginForm';
import Profile from './components/Profile';
import OrderHistory from './components/OrderHistory';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            {/* child routes for '/' */}
            <Route path='customers' element={<CustomerLayout />}>
              {/* child routes for '/customers' */}
              <Route path='' element={<LoginForm />} />
              <Route path='login' element={<LoginForm />} />
              <Route
                path='register'
                element={<h3>new customer register her</h3>}
              />
              <Route path='profile' element={<Profile />} />
              <Route path='order-history' element={<OrderHistory />} />
            </Route>

            <Route path='about' element={<AboutLayout />}>
              {/* child routes for '/about' */}
              <Route path='company' element={<h3>about company here</h3>} />
              <Route path='clients' element={<h3>about clients here</h3>} />
              <Route path='staff' element={<h3>about staff here</h3>} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
