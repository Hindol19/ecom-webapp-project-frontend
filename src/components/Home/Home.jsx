import "./Home.scss";
import { useEffect, useContext } from "react";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";

const Home = () => {
  const { categories, setCategories, products, setProducts } =
    useContext(Context);

  //Getting Categories from api=>
  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

  const getCategories = () => {
    //By using ?populate=* we can get all the data
    fetchDataFromApi("/api/categories?populate=*").then((res) => {
      console.log(res);
      setCategories(res);
      //Now the object "categories" has the categories from the api call
    });
  };

  const getProducts = () => {
    //By using ?populate=* we can get all the data
    fetchDataFromApi("/api/products?populate=*").then((res) => {
      console.log(res);
      setProducts(res);
      //Now the object "categories" has the categories from the api call
    });
  };

  return (
    <div>
      <Banner />
      <div className="main-content">
        <div className="layout">
          <Category categories={categories} />
          <Products products={products} headingText="Popular Products" />
        </div>
      </div>
    </div>
  );
};

export default Home;
