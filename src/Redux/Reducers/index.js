import React from "react";
import { useHistory } from "react-router-dom";
const intialState = {
  cartList: [],
  quantity: [
    {
      _id: 1,
      value: 1,
    },
    {
      _id: 2,
      value: 1,
    },
    {
      _id: 3,
      value: 1,
    },
    {
      _id: 4,
      value: 1,
    },
  ],
  registeredData: [],
  loggedInData: {},
};

const rootReducer = (state = intialState, action) => {
  switch (action.type) {
    case "CART_LIST":
      var newCartList = [...state.cartList];
      newCartList.push(action.payload);
      return { ...state, cartList: newCartList };

    case "CART_QUANTITY":
      var newQuantity = [...state.quantity];
      newQuantity[action.payload._id - 1].value =
        state.quantity[action.payload._id - 1].value + 1;
      return { ...state, quantity: newQuantity };

    case "CART_DECREMENT":
      var newQuantity = [...state.quantity];
      newQuantity[action.payload._id - 1].value =
        state.quantity[action.payload._id - 1].value - 1;
      return { ...state, quantity: newQuantity };

    case "CART_DELETE":
      var newstate1 = [...state.cartList];
      newstate1.splice(action.payload, 1);
      console.log("DELETE1", state.cartList);
      return { ...state, cartList: newstate1 };

    case "REGISTERING":
      var registervals = [...state.registeredData];
      if (registervals.length == 0) {
        alert("Registered SucessFully");
        registervals.push(action.payload);
      } else {
        var count = 0;
        for (var a in registervals) {
          //This condition is used to check Whether he is previously registered.
          if (registervals[a].email === action.payload.email) {
            count = count + 1;
            alert("You're Already REgistered.Please LogIn");
          }
        }
        //If count is Zero.He is not registered Previously and it will add new data
        if (count === 0) {
          alert("Registered SucessFully");
          registervals.push(action.payload);
        }
      }
      return { ...state, registeredData: registervals };

    case "LOGGING":
      var logInVals = { ...state.loggedInData };
      logInVals = {
        email: action.payload.email,
        password: action.payload.password,
      };
      //Making CArtList and Quantity as empty
      var cartList1 = [];
      var quantity1 = intialState.quantity;
      return {
        ...state,
        cartList: cartList1,
        quantity: quantity1,
        loggedInData: logInVals,
      };

    case "CART_CLEAR":
      alert("Your Payment is sucessful");
      var cartList1 = [];
      var quantity1 = intialState.quantity;
      return { ...state, cartList: cartList1, quantity: quantity1 };

    default:
      return state;
  }
};

export default rootReducer;
