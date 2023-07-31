import React from 'react';
import CartTotal from '../CartTotal';
import CartTable from '../CartTable/index';

interface LayoutProps {
  children?: React.ReactNode;
  width?: number;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <section className='section-content padding-y' style={{ marginTop: '140px' }}>
    <div className='container'>
      <div className='row'>
        <main className='col-md-9'>
          <CartTable children={children} />
        </main>
        <aside className='col-md-3'>
          <CartTotal />
        </aside>
      </div>
    </div>
  </section>
);
export default Layout;
