import logo from '../../images/logo.png';

export default function Footer() {
    return (
      <div className="footer-container">
        <h1>Footer</h1>
        <div className='footer-logo' id="footer-logo">
          <img src={logo} />
        </div>
      </div>
    );
  }