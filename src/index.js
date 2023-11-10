import { StrictMode } from "react";
import ReactDOM from "react-dom";
import fontawesome from "./fontawesome";
import App from "./App";
import rootReducer from "./Redux/Reducers";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import store from "./store";
import { persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
const rootElement = document.getElementById("root");
//import persistReducer from "redux-persist/es/persistReducer";

// const persistConfig ={
//   key:"root",
//   storage
// }

// const persistedReducer = persistReducer(persistConfig,rootReducer)
// const store = createStore(persistedReducer)
// const persistor = persistStore(store)

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>{" "}
    </Provider>{" "}
  </StrictMode>,
  rootElement
);
