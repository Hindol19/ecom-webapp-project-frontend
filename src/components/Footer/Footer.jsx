import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            mollitia deleniti molestias quia tenetur odio reprehenderit vel
            fugiat alias! Modi ipsam voluptate sapiente, debitis aliquid facilis
            cumque eaque assumenda voluptatem iu
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">
              25 Ashutosh Chatterjee Lane, Mahesh, Serampore, Hooghly, 712202
            </div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone: 012 345 6789</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: mystore01@gmail.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <span className="text" onClick={() => navigate("/category/1")}>
            Headphones
          </span>
          <span className="text" onClick={() => navigate("/category/3")}>
            Smart Watches
          </span>
          <span className="text" onClick={() => navigate("/category/4")}>
            Bluetooth Speakers
          </span>
          <span className="text" onClick={() => navigate("/category/2")}>
            Wireless Earbuds
          </span>
          <span className="text" onClick={() => navigate("/unavailable")}>
            Home Theatre
          </span>
          <span className="text" onClick={() => navigate("/unavailable")}>
            Projectors
          </span>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <span className="text" onClick={() => navigate("/")}>
            Home
          </span>
          <span className="text" onClick={() => navigate("/about")}>
            About
          </span>
          <span className="text" onClick={() => navigate("/unavailable")}>
            Privacy Policy
          </span>
          <span className="text" onClick={() => navigate("/unavailable")}>
            Returns
          </span>
          <span className="text" onClick={() => navigate("/unavailable")}>
            Terms & Conditions
          </span>
          <span className="text" onClick={() => navigate("/unavailable")}>
            Contact Us
          </span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <div className="text">
            MYSTORE 2023 CREATED BY HINDOL BANERJEE. PREMIUM E-COMMERCE
            PLATFORM.
          </div>
          <img src={Payment} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
