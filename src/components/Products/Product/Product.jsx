import "./Product.scss";
import { useNavigate } from "react-router-dom";
import prod from "../../../assets/products/earbuds-prod-1.webp";
const Product = ({ id, img, price, name }) => {
  // console.log(id);
  const navigate = useNavigate();
  return (
    <div
      key={id}
      className="product-card"
      onClick={() => navigate("/product/" + id)}
    >
      <div className="thumbnail">
        <img src={img} alt="" />
      </div>
      <div className="prod-details">
        <span className="name">{name}</span>
        <span className="price">&#8377;{price}</span>
      </div>
    </div>
  );
};

export default Product;
