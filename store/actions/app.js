import { ADD_TO_CART, INIT_CART, INIT_MOBILE_MENU, REMOVE_CART_ITEM } from "../actionTypes"



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

export const initMobileMenu = () => (dispatch) => {
    dispatch({
        type: INIT_MOBILE_MENU
    })
}


