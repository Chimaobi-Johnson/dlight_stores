import {
  ADD_TO_CART,
  CLEAR_CART_ITEMS,
  INIT_CART,
  INIT_MOBILE_MENU,
  INIT_SEARCH_BAR,
  REMOVE_CART_ITEM,
  STORE_SITE_CONTENT,
  UPDATE_CART_QUANTITY,
  UPDATE_DELIVERY_DETAILS,
  UPDATE_SUBTOTAL,
  UPDATE_USER_CART,
} from "../actionTypes";

const initialState = {
  cartInit: false,
  cart: {
    cartItems: [],
    subTotal: null,
  },
  content: null,
  deliveryData: null,
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
        //if size and color is not the same, also return true
        function checkCart(cartArr) {
          return (
            cartArr.productId === action.payload.productId &&
            (cartArr.size && action.payload.size
              ? cartArr.size.label === action.payload.size.label
              : true) &&
            (cartArr.color && action.payload.color
              ? cartArr.color.code === action.payload.color.code
              : true)
          );
        }
        const isInArray = cartArr.some(checkCart);
        if (isInArray === false) {
          cartArr.unshift(action.payload);
        } else {
          // item exists
          //  check if price has been updated and update price and qty if true
          cartArr.map((el) => {
            if (
              el.productId === action.payload.productId &&
              el.price !== action.payload.price
            ) {
              el.price = action.payload.price;
              el.quantity = action.payload.quantity;
            }
          });
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

    case CLEAR_CART_ITEMS:
      newState = {
        ...state,
        cart: {
          ...state.cart,
          cartItems: [],
          subTotal: null
        },
      };
      return newState;


    case UPDATE_CART_QUANTITY:
      const cartA = [...state.cart.cartItems];
      console.log(action.payload);
      cartA.map((item) => {
        if (
          item.productId === action.payload.productId &&
          (item.color && action.payload.color
            ? item.color.code === action.payload.color.code
            : true) &&
          (item.size && action.payload.size
            ? item.size.label === action.payload.size.label
            : true)
        ) {
          item.quantity = action.payload.qty;
          item.price = action.payload.updatedPrice;
        }
      });

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
      const newCart = [...action.payload.data.cart.items];

      newState = {
        ...state,
        cart: {
          ...state.cart,
          cartItems: newCart,
        },
      };
      return newState;
    case UPDATE_SUBTOTAL:
      let total = 0;
      state.cart.cartItems.map((el) => {
        total = el.price + total;
      });

      newState = {
        ...state,
        cart: {
          ...state.cart,
          subTotal: total,
        },
      };
      return newState;
    case UPDATE_DELIVERY_DETAILS:
      newState = {
        ...state,
        deliveryData: action.payload,
      };
      return newState;
    case STORE_SITE_CONTENT:
      newState = {
        ...state,
        content: action.payload,
      };
      return newState;
    default:
      return state;
  }
};

export default updateAppData;
