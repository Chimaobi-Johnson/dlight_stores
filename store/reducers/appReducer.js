import { ADD_TO_CART, INIT_CART } from "../actionTypes";

const initialState = {
  cart: {
    init: '', //reveal, hide, ''
    cartItems: []
  },
};

export const updateAppData = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case INIT_CART:
      newState = {
        ...state,
        cart: {
          ...state.cart,
          init: state.cart.init === 'reveal' ? 'hide' :'',
        },
      };
      return newState;
    case ADD_TO_CART:
      const cartArr = [...state.cart.cartItems] 
      if(cartArr.length !== 0) {
        cartArr.map(item => {
          if(item.productId === action.payload.productId) {
            return
          } 
          cartArr.push(action.payload)
        })
      } else {
        cartArr.push(action.payload)
      }
      newState = {
        ...state,
        cart: {
          ...state.cart,
          init: 'reveal',
          cartItems: cartArr,
        },
      };
      return newState;
    default:
      return state;
  }
};

export default updateAppData;
