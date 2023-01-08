import React from 'react';
import Navbar from './Navbar';

interface layout {
  children: any;
}

function Layout({ children }: layout) {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex-auto">{children}</div>
      <footer className="flex-auto">asdfasdf</footer>
    </div>
  );
}

export default Layout;
