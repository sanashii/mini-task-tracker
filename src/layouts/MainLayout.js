import React from 'react';
import MainHeader from './MainHeader';

function MainLayout({ children }) {
  return (
    <div>
      <MainHeader />
      <main>{children}</main>
    </div>
  );
}

export default MainLayout;
