import "./Work.css";
import imdb from "../../images/imdb.png"

export default function Work() {
    return (
      <div className="page-container" id="work-page-container">

        <div className="links-container" id="work-page-links-container">
          <a href="https://www.imdb.com/name/nm7842959/" className="page-link" id="imdb-page-link">
              see Scott's credits on IMDb
          </a>
        </div>

        {/* <div className="page-subtitle" id="work-page-subtitle">
          
        </div> */}

        <div className="page-content" id="work-page-content">
          
            <iframe className="youtube" src="https://www.youtube.com/embed/bxOBPI_b4VM" title="Good As Gold" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          
            <iframe className="youtube" src="https://www.youtube.com/embed/_z-bDHkiesY" title="Share Love with Sensory ‘Love Notes’ from Rice Krispies Treats + Autism Speaks" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          
            <iframe className="youtube" src="https://www.youtube.com/embed/cYqGwbsCqpM" title="“The Lurker” Trailer (2019)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            
            <iframe className="vimeo" src="https://player.vimeo.com/video/730340299?h=2e5bc2c979" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
        
        </div>

      </div>
    );
  }

