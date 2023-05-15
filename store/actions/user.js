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
    if (userCartItems.length === 0) {
      console.log("emptyusercart");
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
        }

        function checkProductId(userCartItems) {
          return userCartItems.productId === item.productId;
        }
      });
      const instance = axios.create({
        withCredentials: true,
      });
      const data = await instance.post(
        process.env.NEXT_PUBLIC_BACKEND_URL + "/user/cart/update",
        newUserCartArr
      );
      if (data.status === 200) {
        console.log(data)
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
