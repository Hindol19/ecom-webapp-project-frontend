import { useContext } from "react";
import { Context } from "../../../utils/context";
import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/earbuds-prod-1.webp";
import "./CartItem.scss";
const CartItem = () => {
  const {
    cartItems,
    handleAddToCart,
    handleRemoveFromCart,
    handleCartProductQuantity,
  } = useContext(Context);
  console.log(cartItems);
  return cartItems.map((item) => (
    <div key={item.id} className="cart-products">
      <div className="cart-product">
        <div className="img-container">
          <img
            src={
              item?.attributes?.img?.data?.[0]?.attributes?.url
            }
            alt=""
          />
        </div>
        <div className="prod-details">
          <span className="name">{item.attributes.title}</span>
          <MdClose
            className="close-btn"
            onClick={() => handleRemoveFromCart(item)}
          />
          <div className="quantity-buttons">
            <span onClick={() => handleCartProductQuantity("dec", item)}>
              -
            </span>
            <span>{item.attributes.quantity}</span>
            <span onClick={() => handleCartProductQuantity("inc", item)}>
              +
            </span>
          </div>
          <div className="text">
            <span>{item.attributes.quantity}</span>
            <span>x</span>
            <span className="highlight">&#8377;{item.attributes.price}</span>
          </div>
        </div>
      </div>
    </div>
  ));
};

export default CartItem;
