import React from 'react';
import Layout from './Layout/index';

const Cart: React.FC = () => {
  return (
    <>
      <Layout>
        <p
          className='d-flex justify-content-center align-items-center'
          style={{ fontSize: 20 }}
        >
          Your Cart is Empty
        </p>
      </Layout>
    </>
  );
};

export default Cart;
