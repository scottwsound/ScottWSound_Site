import { Link } from 'react-router-dom'
import logo from '../../images/logo.png';

export default function NavBar() {
    return (
      <div className="nav-container">
        <div className='nav-logo' id="navLogo">
          <img src={logo} />
        </div>
        <div className="nav-links">
          <Link to="/">home</Link>
        </div>
        <div className="nav-links">
          <Link to="/about">about</Link>
        </div>
        <div className="nav-links">
          <Link to="/contact">contact</Link>
        </div>
        <div className="nav-links">
          <Link to="/credits">credits</Link>
        </div>
        <div className="nav-links">
          <Link to="/equipment">equipment</Link>
        </div>
        <div className="nav-links">
          <Link to="/work">work</Link>
        </div>
        
      </div>
    );
  }