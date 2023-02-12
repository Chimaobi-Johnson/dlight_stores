import { ADD_TO_CART, INIT_CART, REMOVE_CART_ITEM } from "../actionTypes"



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

export const removeCartItem = (productId) => (dispatch) => {
    dispatch({
        type: REMOVE_CART_ITEM,
        payload: productId
    })
}
