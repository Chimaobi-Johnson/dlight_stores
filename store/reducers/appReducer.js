import {
  ADD_TO_CART,
  INIT_CART,
  INIT_MOBILE_MENU,
  INIT_SEARCH_BAR,
  REMOVE_CART_ITEM,
  UPDATE_CART_QUANTITY,
  UPDATE_USER_CART,
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
      }  else {
        // check if item exists in cart if not, add new item
        //if size is not the same, also return true 
        function checkCart(cartArr) {
          return (cartArr.productId === action.payload.productId) && (cartArr.size === action.payload.size)
        }
        const isInArray = cartArr.some(checkCart);
        if (isInArray === false) {
          cartArr.push(action.payload);
        } else {
           // item exists 
          //  check if price has been updated and update price and qty if true 
           cartArr.map(el => {
            if(el.productId === action.payload.productId && el.price !== action.payload.price) {
              el.price = action.payload.price
              el.quantity = action.payload.quantity
            }
           })
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

    case UPDATE_CART_QUANTITY:
      const cartA = [ ...state.cart.cartItems ];
      cartA.map(item => {
        if(item.productId === action.payload.productId) {
          item.quantity = action.payload.qty
          item.price = action.payload.updatedPrice
        }
      })

      newState = {
        ...state,
        cartInit: false,
        cart: {
          ...state.cart,
          cartItems: cartA,
        },
      };
      return newState;

    case UPDATE_USER_CART:
         // update local cart
    const newCart = [ ...action.payload.data.cart.items ]
    
    newState = {
          ...state,
          cart: {
            ...state.cart,
            cartItems: newCart
          },
        };
        return newState;
    default:
      return state;
  }
};

export default updateAppData;
