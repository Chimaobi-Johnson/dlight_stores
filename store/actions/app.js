import { ADD_TO_CART, INIT_CART, UPDATE_SINGLE_PRODUCT_PAGINATION } from "../actionTypes"



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

export const updateSingleProductPagination = (prevData, nextData) => (dispatch) => {
    dispatch({
        type: UPDATE_SINGLE_PRODUCT_PAGINATION,
        payload: {
            prevData: prevData,
            nextData: nextData
        }
    })
}