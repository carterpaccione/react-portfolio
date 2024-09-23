import { useState } from 'react';
import Nav from './Nav.jsx';
import Aboutme from './pages/Aboutme.jsx';
import Project from './pages/Project.jsx';
import Contact from './pages/Contact.jsx';
import Resume from './pages/Resume.jsx';
import Footer from './Footer.jsx';

import './PortfolioContainer.css';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Aboutme');

    const renderPage = () => {
        if (currentPage === 'Aboutme') {
            return <Aboutme />;
        }
        if (currentPage === 'Portfolio') {
            return <Project />;
        }    
        if (currentPage === 'Contact')  {
            return <Contact />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div id='container'>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
            <main>{renderPage()}</main>
            <Footer />
        </div>
    )
}