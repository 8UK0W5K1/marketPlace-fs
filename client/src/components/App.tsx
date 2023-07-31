import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home/index.js';
import Layout from '../Layout';
import Login from '../components/Auth/Login/index.js';
import Register from '../components/Auth/Register/index.js';

import About from '../pages/About/index.js';
import Help from '../pages/Help/index.js';

import Cart from '../components/Cart/index.js';
import Checkout from '../components/Checkout/index.js';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/about' element={<About />} />
          <Route path='/help' element={<Help />} />

          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />

          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
