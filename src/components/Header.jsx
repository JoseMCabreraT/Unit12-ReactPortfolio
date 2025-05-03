import '../styles/Header.css';
import Navigation from './Navigation';

function Header() {
  return (
    <header className="header">
      <h1 className="name">Jose Cabrera</h1>
      <nav>
        <Navigation />
      </nav>
    </header>
  );
}

export default Header;