import "./Products.scss";
import Product from "./Product/Product";

const Products = ({ products, innerPage, headingText }) => {
  // console.log(products?.data[1].id);
  return (
    <div className="products-container">
      {!innerPage && <div className="sec-heading">{headingText}</div>}
      <div className="products">
        {products?.data?.map((item) => {
          // console.log(item.id);
          return (
            <Product
              id={item.id}
              img={
                process.env.REACT_APP_DEV_URL +
                item.attributes.img.data[0].attributes?.url
              }
              price={item.attributes.price}
              name={item.attributes.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Products;
