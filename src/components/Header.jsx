import '../styles/Header.css';
import Navigation from './Navigation';
import { useState } from 'react';

function Header() {
    const handlePageChange = (page) => setCurrentPage(page);
    const [currentPage, setCurrentPage] = useState('Home');
    return (
        <header className="header">
         <h1>Jose Cabrera</h1>
         <nav>
          <Navigation />
         </nav>
        </header>
    );

}//function Header

export default Header;