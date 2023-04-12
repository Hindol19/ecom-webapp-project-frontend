import RelatedProducts from "./RelatedProducts/RelatedProducts";
import { useContext } from "react";
import { Context } from "../../utils/context";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";

import prod from "../../assets/products/earbuds-prod-1.webp";
import "./SingleProduct.scss";
const SingleProduct = () => {
  const { handleAddToCart } = useContext(Context);

  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const { data } = useFetch("/api/products?populate=*&[filters][id]=" + id);
  // const { data: relData } = useFetch(
  //   `/api/products?populate=*&[filters][categories][id]=${id}`
  // );

  const increment = () => {
    setQuantity((prevState) => prevState + 1);
  };
  const decrement = () => {
    setQuantity((prevState) => {
      if (prevState == 1) return 1;
      else return prevState - 1;
    });
  };

  const product = data?.data?.[0]?.attributes;
  // console.log(data);
  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img
              src={
                process.env.REACT_APP_DEV_URL +
                data?.data?.[0]?.attributes?.img?.data?.[0]?.attributes?.url
              }
              alt=""
            />
          </div>
          <div className="right">
            <span className="name">{product?.title}</span>
            <span className="price">
              &#8377;{data?.data?.[0]?.attributes?.price}
            </span>
            <span className="desc">{product?.desc}</span>

            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span onClick={decrement}>-</span>
                <span>{quantity}</span>
                <span onClick={increment}>+</span>
              </div>
              <button
                className="add-to-cart-button"
                onClick={() => {
                  handleAddToCart(data.data[0], quantity);
                  setQuantity(1);
                }}
              >
                <FaCartPlus size={20} />
                ADD TO CART
              </button>
            </div>

            <span className="divider" />

            <div className="info-item">
              <span className="text-bold">
                Category:
                <span>Headphones</span>
              </span>
              <span className="text-bold">
                Share:
                <span className="social-icons">
                  <FaFacebookF size={16} />
                  <FaTwitter size={16} />
                  <FaInstagram size={16} />
                  <FaLinkedinIn size={16} />
                  <FaPinterest size={16} />
                </span>
              </span>
            </div>
          </div>
        </div>
        <RelatedProducts
          productId={id}
          categoryId={product?.categories?.data?.[0]?.id}
        />
      </div>
    </div>
  );
};

export default SingleProduct;
