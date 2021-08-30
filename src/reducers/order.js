import {ADD_TO_ORDER} from '../actions/actionTypes';

const initialState = {
  order: {}
}

const orderReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TO_ORDER:
      return {...state, order: action.payload}
    default: return state  
  }
}

export default orderReducer;