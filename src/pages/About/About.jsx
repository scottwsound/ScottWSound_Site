import "./About.css";
// import scott1 from '../../images/scott1.jpg'
import scott2 from '../../images/scott2.jpg'
// import scott3 from '../../images/scott3.jpeg'
import {Link} from "react-router-dom";

export default function About() {
    return (
      <div className="page-container">
        <div className="page-content" id="about-page-content">
          <div className="page-image">
            <div  className="image-wrapper">
              <img id="headshot" className="image" src={scott2}></img>
            </div>
          </div>
          
          <div  className="page-text">
            <div className="page-subtitle">
              Meet Scott
            </div>
            <div>
            Scott is a Chicago-based location sound recordist with 8+ years of experience providing professional recording services to a wide variety of productions. His expertise spans all positions within the sound department, and his experience spans all levels of production, from small short films documentaries, and internal corporate videos, to commercials, feature films, and large scale network television programs. 

            </div>
            <div>
            Scott earned a Bachelor of Arts in Digital Cinema, with a concentration in Sound, from DePaul University in Chicago, Illinois, and has been working in the local industry ever since. Before setting out on his own as a full time freelancer, he spent a number of years as a technician at a local sound equipment rental house, where he was able to gain unique experience and expand his equipment expertise. When not on set, he enjoys cooking, and spending time with his cats.
            </div>

            <div className="links-container">
              <Link to="/contact" className="page-link">get in touch</Link>
            </div>
            
          </div>
      </div>
    </div>
    );
  }