import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import logo from '../../images/logo.png';
import name from '../../images/name.png';
import "./NavBar.css"

export default function NavBar() {
  const location = useLocation();
  const activeLinkClass = function(path) {
    if (location.pathname === path) { 
        return 'active-nav-links'
    } 
    else if (location.pathname.slice(0,12) === path ) {
        return 'active-nav-links'
    } 
    else if (location.pathname.slice(0,7) === path) {
        return 'active-nav-links'
    } 
    else {
        return 'nav-links'
    }
};
    return (
      <div className="nav-container">
        <div className='nav-links' id="navLogo">
          <Link to="/"><img src={name} /></Link>
        </div>
        <div className={activeLinkClass('/about')}>
          <Link to="/about">about</Link>
        </div>
        {/* <div className={activeLinkClass('/credits')}>
          <Link to="/credits">credits</Link>
        </div> */}
        <div className={activeLinkClass('/equipment')}>
          <Link to="/equipment">equipment</Link>
        </div>
        <div className={activeLinkClass('/work')}>
          <Link to="/work">work</Link>
        </div>
        <div className={activeLinkClass('/contact')}>
          <Link to="/contact">contact</Link>
        </div>
        
      </div>
    );
  }