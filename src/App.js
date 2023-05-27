import React, { useState } from "react";
import NavTabs from "./components/NavTabs";
import AboutMe from './components/pages/About'
import Resume from "./components/pages/Resume";
import Portfolio from "./components/pages/Portfolio";
import ContactForm from "./components/pages/Contact";

const App = () => {
  const [currentPage, setCurrentPage] = useState("AboutMe");
  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === "AboutMe") {
      return <AboutMe />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    return <ContactForm />;
  };

  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
     <main>
        {renderPage()}
        </main> 
      <footer>hello world footer</footer>
    </>
  );
};

export default App;
