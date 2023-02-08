import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import AppData from './reducers/appReducer';
import { createWrapper } from "next-redux-wrapper"

const middleware = [thunk]

const rootPersistConfig = {
  key: 'root',
  storage,
}

const appPersistConfig = {
  key: 'app',
  storage: storage,
  whitelist: ['product']

}

const store= configureStore({
  reducer: {
    app: AppData
  }
})

export default store 



// const rootReducer = combineReducers({
//   app: persistReducer(appPersistConfig, AppData)
// })

// // const persistedReducer = persistReducer(rootPersistConfig, rootReducer)

// const composeEnhancers =
//   typeof window === 'object' &&
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

// const enhancer = composeEnhancers(applyMiddleware(...middleware));

// const makeStore = () => createStore(rootReducer, enhancer)

// export const wrapper = createWrapper(makeStore)
// // export default persistReducer(rootPersistConfig, rootReducer)


