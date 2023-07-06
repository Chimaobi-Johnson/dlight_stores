import axios from "axios";
import {
  STORE_LOGGEDIN_USER,
  UPDATE_USER_CART,
  UPDATE_USER_CART_FAIL,
} from "../actionTypes";

export const storeLoggedInUser = (data) => async (dispatch) => {
  dispatch({
    type: STORE_LOGGEDIN_USER,
    payload: {
      data,
    },
  });
};

export const updateUserCart =
  (localItems, userCartItems) => async (dispatch) => {
    let counter = 0;
    let cartArr;
    if ((userCartItems.length === 0 && localItems.length === 0) || (userCartItems.length === 0)) {
      const instance = axios.create({
        withCredentials: true,
      });
      const data = await instance.post(
        process.env.NEXT_PUBLIC_BACKEND_URL + "/user/cart/update",
        localItems
      );
      if (data.status === 200) {
        dispatch({
          type: UPDATE_USER_CART,
          payload: {
            data: data.data.data
          }
        });
      } else {
        dispatch({
          type: UPDATE_USER_CART_FAIL,
        });
      }
    } else {
      const newUserCartArr = [...userCartItems];
      localItems.map((item) => {
        // if the ids match add items to user cart else do nothing

        if (userCartItems.some(checkProductId)) {
          return;
        } else {
          newUserCartArr.push(item);
          
          // number of items pushed, if zero it means no new item has been added to cart 
          // so therefore the local cart gets updated to the server
          // otherwise the newusercartarr is uploaded
          counter++ 
        }

        function checkProductId(userCartItems) {
          return userCartItems.productId === item.productId;
        }
      });
      if(counter > 0) {
        cartArr = newUserCartArr
      } else {
        cartArr = localItems
      }
      const instance = axios.create({
        withCredentials: true,
      });
      const data = await instance.post(
        process.env.NEXT_PUBLIC_BACKEND_URL + "/user/cart/update",
       cartArr
      );
      if (data.status === 200) {
        dispatch({
          type: UPDATE_USER_CART,
          payload: {
            data: data.data.data
          }
        });
      } else {
        dispatch({
          type: UPDATE_USER_CART_FAIL,
        });
      }
    }
  };
