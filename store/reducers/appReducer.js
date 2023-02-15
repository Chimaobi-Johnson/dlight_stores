import {
  ADD_TO_CART,
  INIT_CART,
  INIT_MOBILE_MENU,
  INIT_SEARCH_BAR,
  REMOVE_CART_ITEM,
} from "../actionTypes";

const initialState = {
  cartInit: false,
  cart: {
    cartItems: [],
  },
  mobileMenuInit: false,
  searchBarInit: false,
};

export const updateAppData = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case INIT_CART:
      newState = {
        ...state,
        cartInit: !state.cartInit,
      };
      return newState;
    case ADD_TO_CART:
      const cartArr = [...state.cart.cartItems];
      if (cartArr.length === 0) {
        //push to cart when item is empty
        cartArr.push(action.payload);
      } else {
        // check if item exists in cart if not, add new item
        function checkCart(cartArr) {
          return cartArr.productId === action.payload.productId;
        }
        const isInArray = cartArr.some(checkCart);
        if (isInArray === false) {
          cartArr.push(action.payload);
        }
      }
      newState = {
        ...state,
        cartInit: true,
        cart: {
          ...state.cart,
          cartItems: cartArr,
        },
      };
      return newState;
    case REMOVE_CART_ITEM:
      const newCartArr = [...state.cart.cartItems];
      // get index of item in array
      function checkCart(newCartArr) {
        return newCartArr.productId === action.payload;
      }
      const currentIndex = newCartArr.findIndex(checkCart);
      newCartArr.splice(currentIndex, 1);

      newState = {
        ...state,
        cartInit: true,
        cart: {
          ...state.cart,
          cartItems: newCartArr,
        },
      };
      return newState;
    case INIT_MOBILE_MENU:
      newState = {
        ...state,
        mobileMenuInit: !state.mobileMenuInit,
      };
      return newState;
    case INIT_SEARCH_BAR:
      newState = {
        ...state,
        searchBarInit: !state.searchBarInit,
      };
      return newState;
    default:
      return state;
  }
};

export default updateAppData;
