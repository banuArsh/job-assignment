import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import data from "../../data";
import { cartListAction } from "../../Redux/Actions";

function ProductCard({ product, cartList }) {
  const dispatch = useDispatch();
  const history = useNavigate();

  const handlecart = () => {
    dispatch(cartListAction(product));
    const obj = cartList;
    if (Object.keys(cartList.loggedInData).length !== 0) {
      // history.push({
      //   pathname: "/cart",
      // });
      history("/cart");
    } else {
      alert("PLEASE LOGIN");
      // history.push({
      //   pathname: "/login",
      // });
      history("/login");
    }
  };

  return (
    <div className="product-card" key={product._id}>
      <div className="product-header">
        <Link to={"/shop/" + product._id}>
          <div className="product-maximize">
            <FontAwesomeIcon icon={["fas", "expand-arrows-alt"]} size="2x" />
          </div>{" "}
        </Link>

        <span className="product-add-to-cart">
          <FontAwesomeIcon
            icon={["fas", "shopping-bag"]}
            onClick={handlecart}
          />{" "}
        </span>
      </div>{" "}
      <div className="product-image">
        <div
          className="background-design"
          style={{
            background: product.colors[0],
          }}
        >
          <div className="circle"> </div>{" "}
        </div>{" "}
        <figure>
          <img src={product.image} alt="product-img" width="220" height="93" />
        </figure>{" "}
      </div>{" "}
      <div className="product-name">
        <p> {product.name} </p>{" "}
      </div>{" "}
      <div className="product-price"> {product.price} </div>{" "}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cartList: state,
  };
};

export default connect(mapStateToProps)(ProductCard);
