import "./Equipment.css"
import {Link} from "react-router-dom";
import { useState } from "react";
import equipment1 from '../../images/equipment1.jpg'
// import equipment2 from '../../images/equipment2.jpg'
// import equipment3 from '../../images/equipment3.jpg'
// import equipment4 from '../../images/equipment4.jpg'
// import equipment5 from '../../images/equipment5.jpg'

export default function Equipment() {
  const [slide, setSlide] = useState(equipment1)

  const slideshow = function() {
    
  }

    return (
      <div className="page-container">
        <div className="links-container">
          <Link to="/contact" className="page-link">get a quote</Link>
        </div>
        
        <div className="page-content" id="equipment-page-content">

          
          <div className="package-container">
            <div className="package-name">
              Basic Equipment Package
            </div>
            <ul>
              <li>8-channel Sound Devices mixer/recorder</li>
              <li>2 Lectrosonics wireless packs with professional quality lavalier microphones</li>
              <li>Boom with a variety of microphones depending on the set location and attributes</li>
              <li>Tentacle timecode sync for 1 camera</li>
            </ul>
            <div className="package-details">
              Additional equipment is available upon request. Please reach out via phone or email if you require additional gear, or if you are unsure of your project's specific needs.  
            </div>
          </div>

          <div className="page-image">
            <div  className="image-wrapper">
            <img className="image" src={slide} />
            </div>
          </div>













          
        </div>

      </div>
    );
  }