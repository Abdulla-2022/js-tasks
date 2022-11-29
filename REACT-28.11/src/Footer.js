import React from "react";
import foot1 from './img/foot-1.svg';
import foot2 from './img/foot-2.svg';
import foot3 from './img/foot-3.svg';
import visa from './img/visa.svg';
import paipal from './img/paipal.svg';
import american from './img/american.svg';
import mastercard from './img/mastercard.svg';
import clarna from './img/clarna.svg';

const Footer = () => {
    return (
        <footer>
  <div className="list">
    <ul>
      <h2>About</h2>
      <li>About Us</li>
      <li>Design</li>
      <li>Sustainability</li>
      <li>We plant trees</li>
      <li>Our Story</li>
      <li>Awards</li>
    </ul>
    <ul>
      <h2>Help</h2>
      <li>Holiday Offers FAQ Us</li>
      <li>FAQ</li>
      <li>Warranty</li>
      <li>Shipments</li>
      <li>Returns &amp; Claims</li>
      <li>Contact us</li>
    </ul>
    <ul>
      <h2>More</h2>
      <li>Where to find us</li>
      <li>Woodendot Family</li>
      <li>Press</li>
      <li>Affiliates</li>
      <li>Video Lifestyle</li>
    </ul>
  </div>
  <div className="newsletter">
    <h4>Dont miss any news and exclusive offers!</h4>
    <p>Newsletter subscription</p>
    <img src={foot1} alt="" />
    <img src={foot2} alt="" />
    <img src={foot3} alt="" />
  </div>
  <div className="end">
    <div className="end-text-1">
      <p>© Copyright – WOODENDOT 2021</p>
    </div>
    <div className="end-img">
      <img src={visa} alt="" />
      <img src={paipal} alt="" />
      <img src={mastercard} alt="" />
      <img src={american} alt="" />
      <img src={clarna} alt="" />
    </div>
    <div className="end-text-2">
      <p>Terms &amp; Conditions | Privacy Policy &amp; Cookies</p>
    </div>
  </div>
</footer>
    )
}

export default Footer;