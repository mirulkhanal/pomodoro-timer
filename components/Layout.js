import React from 'react';
import Head from 'next/head';
const Layout = ({ children, title = 'Welcome to pomodoro timer' }) => {
  return (
    <div className='layout'>
      <Head>
        <title>{title}</title>
      </Head>
      <main className='layout-children'>{children}</main>
    </div>
  );
};

export default Layout;
