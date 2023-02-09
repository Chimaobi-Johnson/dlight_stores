import { ADD_TO_CART, INIT_CART, UPDATE_SINGLE_PRODUCT_PAGINATION } from "../actionTypes";

const initialState = {
  cartInit: false,
  cart: {
    cartItems: []
  },
  product: {
    pagination: {
        nextData: null,
        prevData: null
      }
  },
  products: null
};

export const updateAppData = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case INIT_CART:
      newState = {
        ...state,
        cartInit: !state.cartInit
      };
      return newState;
    case ADD_TO_CART:
      const cartArr = [...state.cart.cartItems] 
      if(cartArr.length === 0) {

        //push to cart when item is empty
        cartArr.push(action.payload)
      } else {

        // check if item exists in cart if not, add new item 
        function checkCart (cartArr) {
          return cartArr.productId === action.payload.productId
        }
        const isInArray = cartArr.some(checkCart);
        if(isInArray === false) {
          cartArr.push(action.payload)
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
    case UPDATE_SINGLE_PRODUCT_PAGINATION:
      newState = {
        ...state,
        product: {
          ...state.product,
          pagination: {
            ...state.product.pagination,
            nextData: action.payload.nextData,
            prevData: action.payload.prevData
          },
        },
      };
      return newState;
    default:
      return state;
  }
};

export default updateAppData;
