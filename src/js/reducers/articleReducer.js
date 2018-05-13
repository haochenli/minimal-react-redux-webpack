import { ADD_ARTICLE, DELETE_ARTICLE } from "../constants/action-types";

const articleReducer = (state = [], action) => {
  console.log('In reducer the state now is:', state)
  console.log('In reducer the actiona are', action)
  switch (action.type) {
    case ADD_ARTICLE:
      return [...state, action.payload];
    case DELETE_ARTICLE:
      return deleteActicle(state, action.payload)
    default:
      return state;
  }
};

function deleteActicle (state, id) {
  return state.filter(item => item.id !== id)
}

export default articleReducer;
