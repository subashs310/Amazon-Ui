import React from 'react';

// Import images
import amazonLogo from '../assets/amazon_logo.png';

const Footer = () => {
  return (
    <div className='footers'>
      
      <div className='footer'>
      <img src={amazonLogo} width="100" alt="Amazon Logo" />
      
      <div className='footer-section'>
        <h3>Get to Know Us</h3>
        <a href="/about-us"><p>About Us</p></a>
        <a href="/careers"><p>Careers</p></a>
        <a href="/press-releases"><p>Press Releases</p></a>
        <a href="/amazon-science"><p>Amazon Science</p></a>
      </div>
      <div className='footer-section'>
        <h3>Connect with Us</h3>
        <a href="https://facebook.com"><p>Facebook</p></a>
        <a href="https://twitter.com"><p>Twitter</p></a>
        <a href="https://instagram.com"><p>Instagram</p></a>
      </div>
      <div className='footer-section'>
        <h3>Make Money with Us</h3>
        <a href="/sell-on-amazon"><p>Sell on Amazon</p></a>
        <a href="/amazon-accelerator"><p>Sell under Amazon Accelerator</p></a>
        <a href="/protect-brand"><p>Protect and Build Your Brand</p></a>
        <a href="/global-selling"><p>Amazon Global Selling</p></a>
        <a href="/affiliate"><p>Become an Affiliate</p></a>
        <a href="/fulfilment-by-amazon"><p>Fulfilment by Amazon</p></a>
        <a href="/advertise-products"><p>Advertise Your Products</p></a>
        <a href="/amazon-pay-merchants"><p>Amazon Pay on Merchants</p></a>
      </div>
      <div className='footer-section'>
        <h3>Let Us Help You</h3>
        <a href="/covid-19-and-amazon"><p>COVID-19 and Amazon</p></a>
        <a href="/your-account"><p>Your Account</p></a>
        <a href="/returns-centre"><p>Returns Centre</p></a>
        <a href="/recalls-product-safety"><p>Recalls and Product Safety Alerts</p></a>
        <a href="/purchase-protection"><p>100% Purchase Protection</p></a>
        <a href="/app-download"><p>Amazon App Download</p></a>
        <a href="/help"><p>Help</p></a>
      </div>


      </div>
      <div className='dislmaier'>
      <p className='copyright'>© 1996-2024, Amazon.com, Inc. or its affiliates</p>

      </div>

     
      <br />
      <br />
    </div>
  );
};
export default Footer