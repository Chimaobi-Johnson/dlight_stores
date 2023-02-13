import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
import AppData from './reducers/appReducer';
import ProductData from './reducers/productsReducer';
import UserData from './reducers/userReducer';

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


const rootPersistConfig = {
  key: 'root',
  storage,
  blacklist: ['app']
}

const appPersistConfig = {
  key: 'app',
  storage,
  blacklist: ['cartInit']
}

const productsPersistConfig = {
  key: 'products',
  storage,
}

const rootReducer = combineReducers({
  app: persistReducer(appPersistConfig, AppData),
  products: persistReducer(productsPersistConfig, ProductData),
  user: UserData
})


const persistedReducer = persistReducer(rootPersistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
})

const persistor = persistStore(store)

export { store, persistor };