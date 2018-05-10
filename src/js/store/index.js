import { createStore } from "redux";
import rootReducer from "../reducers/index";

const store = createStore(
  rootReducer,
);

console.log('store', store.getState())
export default store;
