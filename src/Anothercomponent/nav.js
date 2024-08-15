import React from 'react';
import amazonLogo from '../assets/amazon_logo.png';
import locationIcon from '../assets/location_icon.png';
import dropdownIcon from '../assets/dropdown_icon.png';
import searchIcon from '../assets/search_icon.png';
import usFlag from '../assets/us_flag.png';
import userIcon from '../assets/user.png';
import cartIcon from '../assets/cart_icon.png';
import menuIcon from '../assets/menu_icon.png';

const Nav = () => {
  return (
    <nav>
      <a href="/"><img src={amazonLogo} width="100" alt="Amazon Logo" /></a>
      <div className="nav-country">
        <img src={locationIcon} height="20" alt="Location Icon" />
        <div>
          <p>Deliver to</p>
          <h1>Chennai</h1>
        </div>
      </div>
      <div className="nav-search">
        <div className="nav-search-category">
          <p>All</p>
          <img src={dropdownIcon} height="12" alt="Dropdown Icon" />
        </div>
        <input type="text" className="nav-search-input" placeholder="Search Amazon" />
        <img src={searchIcon} className="nav-search-icon" alt="Search Icon" />
      </div>
      {/* <div className="nav-language">
        <img src={usFlag} width="25px" alt="US Flag" />
        <p>EN</p>
        <img src={dropdownIcon} width="8px" alt="Dropdown Icon" />
      </div> */}
      <div className="nav-texts">
        <p><a href="/login.html">Hello, sign in</a></p>
        <h1>Account & Lists <img src={dropdownIcon} width="8px" alt="Dropdown Icon" /></h1>
      </div>
      <div className="nav-texts">
        <p>Returns</p>
        <h1>& Orders</h1>
      </div>
      <a href="/login.html" className="mobile-user-icon" style={{ display: 'none' }}>
        <img src={userIcon} alt="User Icon" />
      </a>
      <a href="/cart.html" className="nav-cart">
        <img src={cartIcon} width="35px" alt="Cart Icon" />
        <h4>Cart</h4>
      </a>
      <div className="nav-bottom">
        <div>
          <img src={menuIcon} width="25px" alt="Menu Icon" />
          <p>All</p>
        </div>
        <p>Today's Deals</p>
        <p>Customer Service</p>
        <p>Registry</p>
        <p>Gift Cards</p>
        <p>Sell</p>
      </div>
    </nav>
  );
};

export default Nav;
