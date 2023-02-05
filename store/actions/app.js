import { ADD_TO_CART, INIT_CART } from "../actionTypes"



export const initCart = () => (dispatch) => {
    dispatch({
        type: INIT_CART
    })
}

export const addToCart = (cartDetails) => (dispatch) => {
    dispatch({
        type: ADD_TO_CART,
        payload: cartDetails
    })
}