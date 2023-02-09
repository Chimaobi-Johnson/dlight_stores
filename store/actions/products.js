import { STORE_PRODUCTS, UPDATE_SINGLE_PRODUCT_PAGINATION } from "../actionTypes"


export const updateSingleProductPagination = (index) => (dispatch) => {
    dispatch({
        type: UPDATE_SINGLE_PRODUCT_PAGINATION,
        payload: index
    })
}

export const storeProducts = (products) => (dispatch) => {
    dispatch({
        type: STORE_PRODUCTS,
        payload: products
    })
}