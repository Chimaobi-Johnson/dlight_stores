import { INIT_CART } from "../actionTypes"



export const initCart = () => (dispatch) => {
    console.log(dispatch)
    dispatch({
        type: INIT_CART,
    })
}