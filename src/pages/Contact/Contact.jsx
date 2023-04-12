import "./Contact.css"
import linkedin from "../../images/linkedin.png"
import facebook from "../../images/facebook.png"
import instagram from "../../images/instagram.png"
import email from "../../images/email.png"
import phone from "../../images/phone.png"
import {useState} from "react";

export default function Contact() {
  const [activeClass, setActiveClass] = useState("inactive")

  function handleClick() {
    activeClass === "active" ? setActiveClass("active") : setActiveClass("active")
  }

  return (
    <div className="page-container">
      
      <div className="page-content" id="contact-page-content">

        <div className="page-subtitle">Interested in working together?</div>
        

        <div className={activeClass} onClick={handleClick} >
                
          { activeClass === "active" ?
            <>
              <a href="mailto:swietrz@gmail.com" className="cta">
                <img src={email} className="icon" />
                &nbsp;
                swietrz@gmail.com
              </a>
              &nbsp;
              &nbsp;
              <a href="tel:224-465-6568" className="cta">
                <img src={phone} className="icon"/>
                &nbsp;
                (224) 465-6568
              </a>
              
            </>
              : "reveal email + phone"
          }
          
        </div>

        <div  className="page-text">
          <ul>Please include the below information to receive an accurate quote:
            <br/>
            <br/>
            <li>What style is the project (sit-down interviews, scripted in a studio, vérité documentary, man-on-the-street, etc.)?</li>
            <li>How many wireless microphones will be needed?</li>
            <li>How many IFB, or individual listening devices are needed?</li>
            <li>What form of sync is needed (sync box, and/or camera hops, and/or slate)? If unsure, feel free to send the contact information for the editor or post-production supervisor.</li>
            <li>How many cameras and what are their make/model? If unsure, feel free to send the contact information for the Director of Photography.</li>
          </ul>
        </div>

        <div className="contact-links-container">
          <a href="https://www.linkedin.com/in/scott-wietrzykowski-b17a54157/">
            <img src={linkedin} className="icon" />
          </a>
          &nbsp;
          &nbsp;
          <a href="https://m.facebook.com/swietr/">
            <img src={facebook} className="icon" />
          </a>
          &nbsp;
          &nbsp;
          <a href="https://www.instagram.com/dubscribble/">
            <img src={instagram} className="icon" />
          </a>
        </div>

      </div>

    </div>
  );
}