import "./Credits.css";
import imdb from "../../images/imdb.png"

export default function Credits() {
    return (
      <div className="page-container">
        <div className="page-content">
          <div className="links-container">
            <a href="https://www.imdb.com/name/nm7842959/" className="icon-link" id="imdb-container">
              <img src={imdb} className="icon" />
            </a>
          </div>
          <div className="page-text">
            <div className="credit-info">
              Another Happy Day - Boom Operator - Post-production
            </div>
            <div className="credit-info">
              Crafted for Christmas - Additional Boom Operator - Post Production
            </div>
            <div className="credit-info">
              Single Car Crashes - Boom Operator - Post Production
            </div>
            <div className="credit-info">
              The Final Say - Boom Operator - Post Production
            </div>
            <div className="credit-info">
              The Lurker - Sound Department
            </div>
            <div className="credit-info">
              Chicago P.D. - Sound Production Assistant - Sound Department
            </div>
            <div className="credit-info">
              The Final Say - Sound Department
            </div>
            <div className="credit-info">
              Alex/October - Boom Operator
            </div>
            <div className="credit-info">
              Fannie - Sound - Short
            </div>
            <div className="credit-info">
              Merry Switchmas - Boom Operator
            </div>
            <div className="credit-info">
              All the Flowers That Cut Through the Earth - Sound Mixer - Short
            </div><div className="credit-info">
              Waiting in Line - Boom Operator - TV Mini Series
            </div>
            <div className="credit-info">
              Charlier Says - Sound Production Assistant (uncredited)
            </div>
            <div className="credit-info">
              Rumble - Boom Operator - Short
            </div>
            <div className="credit-info">
              Psychomanteum - Boom Operator - Short
            </div>
            <div className="credit-info">
              Pointe Work - Sound Mixer - Short
            </div>
            <div className="credit-info">
              Samson - Boom Operator - Short
            </div>
            <div className="credit-info">
              Landline - Boom Operator
            </div>
            <div className="credit-info">
              Cry It Out - Boom Operator - Short
            </div>
            <div className="credit-info">
              Gary Ferguson Dies - Boom Operator - Short
            </div>

          </div>
        </div>
      </div>
    );
  }