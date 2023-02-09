import { STORE_PRODUCTS, UPDATE_SINGLE_PRODUCT_PAGINATION } from "../actionTypes";

const initialState = {
  product: {
    currentIndex: null
  },
  products: null
};

export const updateProducts = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case UPDATE_SINGLE_PRODUCT_PAGINATION:
      newState = {
        ...state,
        product: {
          ...state.product,
          currentIndex: action.payload
        },
      };
      return newState;
    case STORE_PRODUCTS:
    newState = {
        ...state,
        products: action.payload
    };
    return newState;
    default:
      return state;
  }
};

export default updateProducts;
