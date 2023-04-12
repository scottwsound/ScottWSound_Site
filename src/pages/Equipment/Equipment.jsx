import "./Equipment.css"
import {Link} from "react-router-dom";

export default function Equipment() {
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
              <li>16-channel mixer/recorder</li>
              <li>2 wireless packs with professional quality lavalier microphones</li>
              <li>Boom with a variety of microphones depending on the set location and attributes</li>
              <li>Time code sync and/or scratch audio to one camera</li>
            </ul>
            <div className="package-details">
              This standard package will cover the majority of basic video setups. For larger and more complex projects, the equipment can be scaled to meet the production's needs.
            </div>
          </div>

          <div className="package-container">
            <div className="package-name">
              Placeholder Package
            </div>
            <ul>
              <li>placeholder</li>
              <li>placeholder</li>
              <li>placeholder</li>
              <li>placeholder</li>
            </ul>
            <div className="package-details">
              package details placeholder
            </div>
          </div>

          <div className="package-container">
            <div className="package-name">
              Placeholder Package
            </div>
            <ul>
              <li>placeholder</li>
              <li>placeholder</li>
              <li>placeholder</li>
              <li>placeholder</li>
            </ul>
            <div className="package-details">
              package details placeholder
            </div>
          </div>
          
        </div>

      </div>
    );
  }