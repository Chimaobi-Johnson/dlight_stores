import { STORE_LOGGEDIN_USER } from "../actionTypes"


export const storeLoggedInUser = (data) => async (dispatch) => {
    dispatch({
        type: STORE_LOGGEDIN_USER,
        payload: {
            data
        }
    })
}