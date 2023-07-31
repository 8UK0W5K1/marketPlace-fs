import React from 'react';
import Navigation from './Navigation';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <>
      <Header />
      <Navigation />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
