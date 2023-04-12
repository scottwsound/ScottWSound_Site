import logo from "../../images/logo.png"
import "./Home.css"

export default function Home() {
  return (
    
    <div className="page-container" id="home-page-container">

      <div className="page-image-container" id="home-page-image-container">
        <img id="home-logo" src={logo}></img>
      </div>
      
      <div className="page-subtitle typing-effect" id="home-page-subtitle">Production Sound Mixer + Sound Designer</div>
      <br></br>
      <div className="page-text">Greater Chicago</div>
      
    </div>
  );
}