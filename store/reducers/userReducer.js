import { STORE_LOGGEDIN_USER, UPDATE_USER_CART, UPDATE_USER_CART_FAIL } from "../actionTypes";

const initialState = {};

const userActions = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case STORE_LOGGEDIN_USER:
      return action.payload.data;
    case UPDATE_USER_CART:
      //update reducer with modified user obj
      return action.payload.data;
    case UPDATE_USER_CART_FAIL:
      newState = {
        ...state,
        errors: 'Cart items update failed'
      }
    return newState
    default:
      return state;
  }
};

export default userActions;
