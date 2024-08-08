import React from "react";
import "./Footer.css";
import { assets } from "../../Assets/assets";

const Footer = () => {
  return <div className="footer" id="footer">

<div className="footer-content">

<div className="footer-content-left">
<h1>PureCraft</h1>
<p>PureCraft is a premiem online furniture store specializing in a wide range of high-quality, stylish, and affordable furniture pieces. Whether you're looking to furnish your home, office, or any other space, Hurniture offers a diverse selection to cater to various tastes and needs</p>
<div className="footer-social-icons">
<img src={assets.insta} alt="" />
<img src={assets.Facebook} alt="" />
<img src={assets.x} alt="" />
</div>
</div>


<div className="footer-content-right">
<h2>GET IN TOUCH</h2>
<ul>
  
  <li>+91 7356899308</li>
  <li>contact@PureCraft.com</li>
</ul>
</div>


<div className="footer-content-center">
<h2>Company</h2>
<ul>
  <li>Home</li>
  <li>About us</li>
  <li>Delivery</li>
  <li>Privacy policy</li>
</ul>



</div>


</div>
<hr />
<p className="footer-copywriting">Copyright 2024 @ hurniture.com - All Right Reserved.</p>
  </div>;
};

export default Footer;
