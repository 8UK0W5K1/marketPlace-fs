import React from 'react';
import Pagination from '../Pagination';
import Product from '../Product';

const Gallery: React.FC = () => {
  return (
    <>
      <section className='mt-3 mb-5'>
        <header className='section-heading mb-5'>
          <h3 className='title-section'>Products</h3>
        </header>
        <div className='row'>{/* Listing */}</div>
        <div className='clearfix'></div>
      </section>
      {/* <Pagination /> */}
    </>
  );
};

export default Gallery;
