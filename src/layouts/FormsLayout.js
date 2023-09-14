import React from 'react';
import Header from './Header';
import Footer from './Footer';

function FormsLayout({ children }) {
  return (
    <div>
      <Header />
      <aside>{children}</aside>
      <Footer />
    </div>
  );
}

export default FormsLayout;
