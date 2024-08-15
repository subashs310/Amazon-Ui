import React from 'react';
import amazonLogo from '../assets/amazon_logo.png';
import locationIcon from '../assets/location_icon_dark.png';
import dropdownIcon from '../assets/dropdown_icon.png';
import searchIcon from '../assets/search_icon.png';
import usFlag from '../assets/us_flag.png';
import userIcon from '../assets/user.png';
import cartIcon from '../assets/cart_icon.png';
import productImg from '../assets/product1-1.jpg';
import ratingImg from '../assets/rating_img.png';
import '../home.css'
// import circleIcon from './assets/circle_icon.png';
// import product2_1 from './assets/product2-1.jpg';
const Navbar = () => (
  <nav>
    <a href="/"><img src={amazonLogo} width="100" alt="Amazon Logo" /></a>
    <div className="nav-country">
      <img src={locationIcon} height="20" alt="Location Icon" />
      <div>
        <p>Deliver to</p>
        <h1>United Kingdom</h1>
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
    <div className="nav-language">
      <img src={usFlag} width="25px" alt="US Flag" />
      <p>EN</p>
      <img src={dropdownIcon} width="8px" alt="Dropdown Icon" />
    </div>
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
  </nav>
);

const ProductPage = () => (
  <div>
    <Navbar />
    <div className="nav-bottom">
      <div>
        {/* <img src={require('./assets/menu_icon.png')} width="25px" alt="Menu Icon" /> */}
        <p>All</p>
      </div>
      <p>Today's Deals</p>
      <p>Customer Service</p>
      <p>Registry</p>
      <p>Gift Cards</p>
      <p>Sell</p>
    </div>

    <p className="breadcrum">
      Video Games &gt; PC &gt; Accessories &gt; Headset
    </p>

    <div className="product-display">
      <div className="product-d-image">
        <div className="product-list-image">
          <img src={productImg} width="60" alt="Product Thumbnail" />
          <img src={productImg} width="60" alt="Product Thumbnail" />
          <img src={productImg} width="60" alt="Product Thumbnail" />
          <img src={productImg} width="60" alt="Product Thumbnail" />
          <img src={productImg} width="60" alt="Product Thumbnail" />
        </div>
        <div className="product-main-image">
          <img src={productImg} width="400" alt="Main Product Image" />
        </div>
      </div>
      <div className="product-d-details">
        <p className="product-title">
          BENGOO G9000 Stereo Gaming Headset for PS4 PC Xbox One PS5 Controller, Noise Cancelling Over Ear
          Headphones with Mic, LED Light, Bass Surround, Soft Memory Earmuffs (Blue)
        </p>
        <p className="product-store">
          Visit the BENGOO Store
        </p>
        <div className="product-rating">
          <div>
            <div>4.3 <img src={ratingImg} height="20px" alt="Rating" /></div>
            <p>104,185 ratings | Search this page</p>
          </div>
          <p><span>#1 Best Seller</span> in PC Game Headsets</p>
          <h5>10K+ bought in past month</h5>
          <hr />
        </div>
        <div className="product-prices">
          <div>
            <p>-35%</p>
            <h1>$<span>25</span>.99</h1>
          </div>
          <h5>List Price: <span>$39.99</span></h5>
          <p>Get <b>Fast, Free Shipping</b> with <span>Amazon Prime</span></p>
          <p><span>FREE Returns</span></p>
          <p><span>Join Prime to buy this item at $22.99</span></p>
          <p>Available at a lower price from <span>other sellers</span> that may not offer free Prime shipping.</p>
        </div>
        <div className="product-color-selection">
          <p>Color: <b>Blue</b></p>
          <div className="product-color-options">
            <div className="option">
              <img src={productImg} width="30px" alt="Black Color Option" />
              <p>Black</p>
            </div>
            <div className="option">
              <img src={productImg} width="30px" alt="Blue Color Option" />
              <p>Blue</p>
            </div>
            {/* Add other color options similarly */}
          </div>
        </div>
        <div className="product-info">
          <p><b>Brand</b></p>
          <p>BENGOO</p>
          <p><b>Model Name</b></p>
          <p>G9000</p>
          <p><b>Color</b></p>
          <p>Blue</p>
          <p><b>Form Factor</b></p>
          <p>Over Ear</p>
          <p><b>Connectivity Technology</b></p>
          <p>Wired</p>
        </div>
        <hr />
        <div className="product-description">
          <h1>About this item</h1>
          <ul>
            <li>【Multi-Platform Compatible】Support PlayStation 4, New Xbox One, PC, Nintendo 3DS, Laptop, PSP, Tablet, iPad, Computer, Mobile Phone. Please note you need an extra Microsoft Adapter (Not Included) when connect with an old version Xbox One controller.</li>
            <li>【Surrounding Stereo Subwoofer】Clear sound operating strong brass, splendid ambient noise isolation and high precision 40mm magnetic neodymium driver, acoustic positioning precision enhance the sensitivity of the speaker unit, bringing you vivid sound field, sound clarity, shock feeling sound. Perfect for various games like Halo 5 Guardians, Metal Gear Solid, Call of Duty, Star Wars Battlefront, Overwatch, World of Warcraft Legion, etc.</li>
            <li>【Noise Isolating Microphone】Headset integrated onmi-directional microphone can transmits high quality communication with its premium noise-concellng feature, can pick up sounds with great sensitivity and remove the noise, which enables you clearly deliver or receive messages while you are in a game. Long flexible mic design very convenient to adjust angle of the microphone.</li>
            <li>【Great Humanized Design】Superior comfortable and good air permeability protein over-ear pads, muti-points headbeam, acord with human body engineering specification can reduce hearing impairment and heat sweat.Skin friendly leather material for a longer period of wearing. Glaring LED lights desigend on the earcups to highlight game atmosphere.</li>
            <li>【Effortlessly Volume Control】High tensile strength, anti-winding braided USB cable with rotary volume controller and key microphone mute effectively prevents the 49-inches long cable from twining and allows you to control the volume easily and mute the mic as effortless volume control one key mute.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const Home = () => (
  <div>Home Page
    <ProductPage />
  </div>
);

export default Home;
