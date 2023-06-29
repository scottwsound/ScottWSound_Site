import "./About.css";
import { useState } from "react";
import scott1 from '../../images/scott1.jpg'
import scott2 from '../../images/scott2.jpg'
import scott3 from '../../images/scott3.jpeg'
import {Link} from "react-router-dom";
import arrow from '../../images/right-arrow.png'

export default function About() {
  const [currentImage, setCurrentImage] = useState(scott2)
  const carousel = [scott1, scott2, scott3]

  const back = function() {
    const idx = carousel.indexOf(currentImage)
    if (idx === 0) {
      setCurrentImage(carousel[carousel.length - 1])
    } else {
      setCurrentImage(carousel[idx - 1])
    }
  }

  const forward = function() {
    const idx = carousel.indexOf(currentImage)
    if (idx === carousel.length - 1) {
      setCurrentImage(carousel[0])
    } else {
      setCurrentImage(carousel[idx + 1])
    }
  }

    return (
      <div className="page-container">
        <div className="page-content" id="about-page-content">
          
          <div className="page-image">
            <div className="image-wrapper">
              <img id="headshot" className="image" src={currentImage} />
            </div>
            <div className="arrows-container">
              <img src={arrow} className="arrow left-arrow" onClick={back}/>
              <img src={arrow} className="arrow right-arrow" onClick={forward}/>
            </div>
          </div>
          
          <div  className="page-text">
            <h1 className="page-subtitle">
              Meet Scott
            </h1>
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