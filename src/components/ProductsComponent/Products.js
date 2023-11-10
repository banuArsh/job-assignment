import React, { useEffect } from "react";
import data from "../../data";
import ProductsHeader from "./ProductsHeader";
import ProductCard from "./ProductCard";
import axios from "axios";
import { useDispatch } from "react-redux";

function Product(props) {
  const dispatch = useDispatch();
  const fetchPoducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("err");
      });
    dispatch(ProductCard(response.data));
  };

  useEffect(() => {
    fetchPoducts();
  }, []);

  return (
    <div className="products">
      <ProductsHeader />
      <div className="products-container">
        <div className="product-cards" dir="ltr">
          {" "}
          {data.products.map((product) => (
            <ProductCard product={product} />
          ))}{" "}
        </div>{" "}
      </div>{" "}
      <div className="related-products">
        <div className="related-products-header">
          <h1> Related Products </h1>{" "}
        </div>{" "}
        <div className="related-products-card">
          {" "}
          {data.products.map((product) => (
            <ProductCard product={product} />
          ))}{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default Product;
