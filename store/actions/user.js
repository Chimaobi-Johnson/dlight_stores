import { STORE_LOGGEDIN_USER, UPDATE_USER_CART } from "../actionTypes"


export const storeLoggedInUser = (data) => async (dispatch) => {
    dispatch({
        type: STORE_LOGGEDIN_USER,
        payload: {
            data
        }
    })
}

export const updateUserCart = (localItems, userCartItems) => async (dispatch) => {
    if(userCartItems.length === 0) {
        console.log('emptyuser')
        console.log(localItems)
        // dispatch({
        //     type: UPDATE_USER_CART,
        //     payload: {
        //         data: localItems
        //     }
        // })
      } else {
        const newUserCartArr = [...userCartItems]
        localItems.map(item => {
  
             // if the ids match add items to user cart else do nothing 
  
              if(userCartItems.some(checkProductId)) {
                return
              } else {
                newUserCartArr.push(item)
              }
      
      
              function checkProductId(userCartItems) {
                  return userCartItems.productId === item.productId
              }
          })
          console.log(newUserCartArr)
        //   dispatch({
        //     type: UPDATE_USER_CART,
        //     payload: {
        //         data: newUserCartArr
        //     }
        // })
      }
  
  
}