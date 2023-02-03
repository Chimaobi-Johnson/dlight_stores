import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
// import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import AppData from './reducers/appReducer';
import { createWrapper } from "next-redux-wrapper"

const middleware = [thunk]


const rootReducer = combineReducers({
  app: AppData
})

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(applyMiddleware(...middleware));

const makeStore = () => createStore(rootReducer, enhancer)

export const wrapper = createWrapper(makeStore)