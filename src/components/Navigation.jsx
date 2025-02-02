import { Link, useLocation } from 'react-router-dom';




function Navigation() {
  
  

return (
  <ul className="nav nav-tabs">
      <li className="nav-item">
        <h2><a href="#About">About Me</a></h2>
      </li>
      <li className="nav-item">
      <h2><a href="#Portfolio">Portfolio</a></h2>
      </li>
      <li className="nav-item">
      <h2><a href="#Contact">Contact</a></h2>
      </li>
      <li className="nav-item">
      <h2><a href="#Resume">Resume</a></h2>
      </li>
    </ul>
);


}//function Navigation

export default Navigation;