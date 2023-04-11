import "./About.css";
import headshot from "../../images/headshot.jpeg"

export default function About() {
    return (
      <div className="page-container">
        <div className="page-content" id="about-page-content">
          <div  className="page-image">
            <img id="headshot" src={headshot}></img>
          </div>
          <div  className="page-text">
            <div className="page-subtitle">
              Hello, my name is Scott.
            </div>
            <div>
              I'm a production sound mixer and sound designer specializing in production sound recording, field recording and SFX editing, sound design, and re-recording mixing.
            </div>
            <div>
              I'm based out of Chicago and am available for projects in the greater Chicago area.
            </div>

            <div>
              <ul>Skills:
                <br/>
                <br/>
                <li>skill 1</li>
                <li>skill 2</li>
                <li>skill 3</li>
              </ul>
            </div>
            
          </div>
      </div>
    </div>
    );
  }