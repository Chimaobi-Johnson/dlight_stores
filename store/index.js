import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storageSession from 'reduxjs-toolkit-persist/lib/storage/session'
import storage from 'redux-persist/lib/storage'
import AppData from './reducers/appReducer';


const rootPersistConfig = {
  key: 'root',
  storage: storageSession
}

const appPersistConfig = {
  key: 'app',
  storage: storageSession,
  whitelist: ['product']

}

const rootReducer = combineReducers({
  app: persistReducer(appPersistConfig, AppData)
})

const persistedReducer = persistReducer(rootPersistConfig, rootReducer)


const store= configureStore({
  reducer: persistedReducer
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


