import { ADD_TO_PRODUCT } from "../actions/actionTypes";

const initialState = {
  products: []
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_PRODUCT:
      return{ ...state, products: action.payload} 
    default: return state

  }
}

export default productsReducer;