import { STORE_LOGGEDIN_USER } from "../actionTypes";

const initialState = {};
  
const userActions = (state = initialState, action) => {
    switch (action.type) {
      case STORE_LOGGEDIN_USER:
        return action.payload.data
      default:
        return state;
    }
  };
  
export default userActions;