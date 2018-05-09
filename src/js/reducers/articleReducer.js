import { ADD_ARTICLE, DELETE_ARTICLE } from "../constants/action-types";

const articleReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return [...state, action.payload];
    case DELETE_ARTICLE:
      return state[0]
    default:
      return state;
  }
};

export default articleReducer;
