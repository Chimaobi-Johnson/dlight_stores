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
} from "../actionTypes";

export const storeSiteContent = (data) => (dispatch) => {
  dispatch({
    type: STORE_SITE_CONTENT,
    payload: data,
  });
};

export const initCart = () => (dispatch) => {
  dispatch({
    type: INIT_CART,
  });
};

export const addToCart = (cartDetails) => (dispatch) => {
  dispatch({
    type: ADD_TO_CART,
    payload: cartDetails,
  });
};

export const removeCartItem = (productId) => (dispatch) => {
  dispatch({
    type: REMOVE_CART_ITEM,
    payload: productId,
  });
};

export const clearCartItems = () => (dispatch) => {
  dispatch({
    type: CLEAR_CART_ITEMS,
  });
};

export const initMobileMenu = () => (dispatch) => {
  dispatch({
    type: INIT_MOBILE_MENU,
  });
};

export const initSearchBar = () => (dispatch) => {
  dispatch({
    type: INIT_SEARCH_BAR,
  });
};

export const updateItemQty = (productId, color, size, qty, updatedPrice) => (dispatch) => {
  console.log(color, size)
  dispatch({
    type: UPDATE_CART_QUANTITY,
    payload: {
      productId,
      color,
      size,
      qty,
      updatedPrice,
    },
  });
};

export const updateSubTotal  = () => (dispatch) => {
  dispatch({
    type: UPDATE_SUBTOTAL,
  });
};

export const updateDeliveryDetails = (data) => (dispatch) => {
    dispatch({
      type: UPDATE_DELIVERY_DETAILS,
      payload: data
    });
  };
