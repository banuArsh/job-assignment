import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import data from "../../data";
import { connect, useDispatch, useSelector } from "react-redux";
import {
  clearCartAction,
  decrementAction,
  deleteAction,
  incrementAction,
} from "../../Redux/Actions";

function Cart({ props, state1 }) {
  var total = 0;
  const [render, setRender] = useState(0);
  let dispatch = useDispatch();
  let state = useSelector((state) => {
    return state;
  });
  useEffect(() => {
    console.log("STORE", state);
  }, [render, state]);

  const [product, setproduct] = useState(state1.cartList);
  const makepayment = (token) => {
    const body = {
      token,
      product,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    return fetch(`http://localhost:8282/payment`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log("RESPONSE", response);
        const { status } = response;
        console.log("STATUS", status);
        dispatch(clearCartAction());
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fun1 = () => {
    for (var i = 0; i < state1.cartList.length; i++) {
      for (var j = i + 1; j < state1.cartList.length; j++) {
        if (state1.cartList[j]._id === state1.cartList[i]._id) {
          console.log("INSIDE LOOP", state1.cartList[j]._id);
          dispatch(incrementAction(state1.cartList[j]));
          state1.cartList.splice(j, 1);
        }
      }
    }
  };

  const handleIncrease = (item) => {
    dispatch(incrementAction(item));
    console.log(state1.quantity[item._id - 1]);
    setRender(render + 1);
  };

  const handleReduce = (item, index) => {
    dispatch(decrementAction(item));
    setRender(render - 1);
  };

  const handleDelete = (item) => {
    dispatch(deleteAction(item));
    setRender(render + 1);
    console.log("State Main", state1);
  };

  const newtotal = (data) => {
    total = total + data;
    console.log(total);
  };

  return (
    <div className="cart-wrapper noselect">
      <div className="cart-header">
        <h3> Shopping Cart New </h3>{" "}
      </div>{" "}
      <div className="cart-list">
        <ul>
          {" "}
          {fun1()}{" "}
          {state1.cartList.map((item, index) => (
            <li className="cart-item">
              <div className="cart-item-img">
                <img src={item.image} width="90" height="38" alt="cart item" />
              </div>{" "}
              <div className="cart-item-name">
                <span> {item.name} </span>{" "}
              </div>{" "}
              <div className="cart-item-qty">
                {" "}
                {state1.quantity[item._id - 1].value > 1 ? (
                  <span
                    onClick={() => {
                      handleReduce(item);
                    }}
                  >
                    <FontAwesomeIcon icon={["fas", "minus"]} />{" "}
                  </span>
                ) : (
                  <span
                    className="cart-delete-item"
                    onClick={() => {
                      handleDelete(index);
                    }}
                  >
                    <FontAwesomeIcon icon={["far", "trash-alt"]} />{" "}
                  </span>
                )}{" "}
                <input
                  type="number"
                  value={state1.quantity[item._id - 1].value}
                  disabled
                />
                <span
                  onClick={() => {
                    handleIncrease(item);
                  }}
                >
                  <FontAwesomeIcon icon={["fas", "plus"]} />{" "}
                </span>{" "}
              </div>{" "}
              <div className="cart-item-price">
                {" "}
                $ {item.price * state1.quantity[item._id - 1].value}
                .00 {newtotal(
                  item.price * state1.quantity[item._id - 1].value
                )}{" "}
              </div>
            </li>
          ))}{" "}
        </ul>{" "}
      </div>{" "}
      <div className="cart-checkout">
        <div className="cart-total">
          <h4> Total: </h4>{" "}
          <span>
            {" "}
            $ {total}
            .00{" "}
          </span>{" "}
        </div>{" "}
        <div className="cart-shipping">
          <h4> Shipping: </h4> <span> Free Shipping </span>{" "}
        </div>{" "}
        <div className="cart-checkout-button">
          <button> Proceed to Checkout </button>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
const MSTP = (state) => {
  return {
    state1: state,
  };
};

const MDTP = () => {
  return {};
};

export default connect(MSTP, MDTP)(Cart);
