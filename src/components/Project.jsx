import { useState } from 'react';
import Portfolio from '../pages/Portfolio';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Resume from '../pages/Resume';


function Project() {

return (
    <div className="mainsection">
        <About />
        <Portfolio />
        <Contact />
        <Resume />
    </div>
);

}//function Project

export default Project;
