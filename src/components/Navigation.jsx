function Navigation() {
  return (
    <ul className="nav">
      <li className="nav-item">
        <a href="#about" aria-label="Go to About Me section">About Me</a>
      </li>
      <li className="nav-item">
        <a href="#portfolio" aria-label="Go to Portfolio section">Portfolio</a>
      </li>
      <li className="nav-item">
        <a href="#contact" aria-label="Go to Contact section">Contact</a>
      </li>
      <li className="nav-item">
        <a href="#resume" aria-label="Go to Resume section">Resume</a>
      </li>
    </ul>
  );
}

export default Navigation;