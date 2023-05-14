import { STORE_LOGGEDIN_USER, UPDATE_USER_CART } from "../actionTypes";

const initialState = {};
  
const userActions = (state = initialState, action) => {
  let newState;
    switch (action.type) {
      case STORE_LOGGEDIN_USER:
        return action.payload.data
      case UPDATE_USER_CART:
          newState = {
            ...state,
            cart: {
              ...state.cart,
              items: action.payload.data
            }
          }
          return newState
      default:
        return state;
    }
  };
  
export default userActions;

