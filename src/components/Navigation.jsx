function Navigation() {
  return (
    <ul className="nav">
      <li className="nav-item">
        <h2><a href="#about" aria-label="Go to About Me section">About Me</a></h2>
      </li>
      <li className="nav-item">
        <h2><a href="#portfolio" aria-label="Go to Portfolio section">Portfolio</a></h2>
      </li>
      <li className="nav-item">
        <h2><a href="#contact" aria-label="Go to Contact section">Contact</a></h2>
      </li>
      <li className="nav-item">
        <h2><a href="#resume" aria-label="Go to Resume section">Resume</a></h2>
      </li>
    </ul>
  );
}

export default Navigation;