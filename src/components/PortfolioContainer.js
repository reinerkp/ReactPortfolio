import React, { useState } from 'react';
import NavTabs from './NavTabs';
import AboutMe from './pages/About';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

export default function PortfolioContainer() {


  return (
    <div style={{border:'2px solid red', height: '100%'}}>
      {/* We are passing the currentPage from state and the function to update it */}
      {/* <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} /> */}
      {/* Here we are calling the renderPage method which will return a component  */}
      {/* {renderPage()} */}

    </div>
  );
}
