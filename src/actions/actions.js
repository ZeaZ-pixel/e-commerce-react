import {ADD_TO_CART, ADD_TO_PRODUCT, ADD_TO_ORDER, ERROR} from './actionTypes'

export const addToCart = (value) => ({type: ADD_TO_CART, payload: value});
export const addToProducts = (value) => ({type: ADD_TO_PRODUCT, payload: value})
export const addToOrder = (value) => ({type: ADD_TO_ORDER, payload: value});
export const addNewErrorMessage = (value) => ({type: ERROR, payload: value});


