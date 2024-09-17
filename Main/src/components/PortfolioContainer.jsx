import { useState } from 'react';
import Nav from './Nav.jsx';
import Aboutme from './pages/About.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Contact from './pages/Contact.jsx';
import Resume from './pages/Resume.jsx';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <Aboutme />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
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
        <div>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
            <main>{renderPage()}</main>
        </div>
    )
}