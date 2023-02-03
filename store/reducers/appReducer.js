import { INIT_CART } from "../actionTypes";
  
  const initialState = {
    cart: {
        init: false
    }
  }
  
  export const updateAppData = (state = initialState, action) => {
    let newState;
    switch (action.type) {
      case INIT_CART:
        newState = {
          ...state,
          cart: {
            ...state.cart,
            init: !state.cart.init
          }
        }
        return newState;
      default:
        return state;
    }
  };
  
  export default updateAppData;