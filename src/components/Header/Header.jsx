import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";

import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { Context } from "../../utils/context";

import "./Header.scss";
import CartItem from "../Cart/CartItem/CartItem";

const Header = () => {
  const { cartCount } = useContext(Context);
  // Making the Header Sticky after scrolling a little bit:->
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    // console.log(offset);

    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    //The useEffect Hook does a specific task for the first time after loading.
    window.addEventListener("scroll", handleScroll);
    //This will detect when the user scrolls and call the "handelScroll" function
  }, []);

  //CART FUNCTIONALITY:->
  const [showCart, setShowCart] = useState(false);

  const handleClick1 = () => {
    if (showCart === false) {
      setShowCart(true);
    } else {
      setShowCart(false);
    }
    console.log(showCart);
  };

  //SEARCH MODAL:=>
  const [showSearch, setShowSearch] = useState(false);

  const handleClick2 = () => {
    if (showSearch === false) {
      setShowSearch(true);
    } else {
      setShowSearch(false);
    }
  };

  const navigate = useNavigate();
  return (
    <>
      <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
        <div className="header-content">
          <ul className="left">
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => navigate("/about")}>About</li>
            <li onClick={() => navigate("/unavailable")}>Categories</li>
          </ul>
          <div className="center" onClick={() => navigate("/")}>
            ELEVATED ELECTRONICS
          </div>
          <div className="right">
            <TbSearch onClick={handleClick2} />
            <AiOutlineHeart onClick={() => navigate("/unavailable")} />
            <span className="cart-icon" onClick={handleClick1}>
              <CgShoppingCart />
              {!!cartCount && <span>{cartCount}</span>}
            </span>
          </div>
        </div>
      </header>
      {showCart && <Cart setShowCart={setShowCart} />}
      {showSearch && <Search setShowSearch={setShowSearch} />}
    </>
  );
};

export default Header;
