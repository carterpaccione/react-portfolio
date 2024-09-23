import './Nav.css';

export default function Nav({ currentPage, handlePageChange }) {
    return (
        <div id='banner'>
            
            <div id='nameDiv'>
                <h1 id='name'>Carter Paccione</h1>
            </div>

            <ul className='nav justify-content-center'>
                <li className='nav-item'>
                    {/* Add inline H1 instead  of other div */}
                </li>
                <li className='nav-item'>
                    <a
                    href='#aboutme'
                    onClick={() => handlePageChange('Aboutme')}
                    className={currentPage === 'Aboutme' ? 'nav-link active' : 'nav-link'}
                    >
                        About
                    </a>
                </li>
                
                <li className ='nav-item'>
                    <a
                    href='#portfolio'
                    onClick={() => handlePageChange('Portfolio')}
                    className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                    >
                        Portfolio
                    </a>
                </li>

                <li className="nav-item">
                    <a
                    href="#contact"
                    onClick={() => handlePageChange('Contact')}
                    className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                    >
                        Contact
                    </a>
                </li>

                <li className="nav-item">
                    <a
                    href="#resume"
                    onClick={() => handlePageChange('Resume')}
                    className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                    >
                        Resume
                    </a>
                </li>
            </ul>
        </div>
    );
}