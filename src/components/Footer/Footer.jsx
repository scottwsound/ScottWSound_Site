import logo from '../../images/logo.png';
import "./Footer.css"

export default function Footer() {
    return (
      <div className="footer-container">
        <div>Scott W Sound LLC - 2023</div>
        <div>Chicago, IL</div>
        <a href="https://annakreno.github.io/portfolio/" id="designer-link">website by Anna Reno</a>
        <div className='footer-logo' id="footer-logo">
          {/* <img src={logo} /> */}
        </div>
      </div>
    );
  }