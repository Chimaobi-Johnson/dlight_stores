import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
import AppData from './reducers/appReducer';
import thunk from 'redux-thunk';


const createNoopStorage = () => {
  return {
    getItem(_key) {
      return Promise.resolve(null);
    },
    setItem(_key, value) {
      return Promise.resolve(value);
    },
    removeItem(_key) {
      return Promise.resolve();
    },
  }
}

const storage = 
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();


const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, AppData)

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
})

const persistor = persistStore(store)

export { store, persistor };

// const rootPersistConfig = {
//   key: 'root',
//   storage: storage
// }

// const appPersistConfig = {
//   key: 'app',
//   storage: storage,
//   blacklist: ['product']
// }

// const rootReducer = combineReducers({
//   app: persistReducer(rootPersistConfig, AppData)
// })

// const persistedReducer = persistReducer(appPersistConfig, rootReducer)


// const store = configureStore({
//   reducer: persistedReducer,
//   devTools: process.env.NODE_ENV !== 'production',
//   middleware: [thunk]
// })

// const persistedStore = persistStore(store)

// export default persistedStore



// // const rootReducer = combineReducers({
// //   app: persistReducer(appPersistConfig, AppData)
// // })

// // // const persistedReducer = persistReducer(rootPersistConfig, rootReducer)

// // const composeEnhancers =
// //   typeof window === 'object' &&
// //   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
// //     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

// // const enhancer = composeEnhancers(applyMiddleware(...middleware));

// // const makeStore = () => createStore(rootReducer, enhancer)

// // export const wrapper = createWrapper(makeStore)
// // // export default persistReducer(rootPersistConfig, rootReducer)


