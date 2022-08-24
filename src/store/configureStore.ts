import { createWrapper } from 'next-redux-wrapper';
import { combineReducers, configureStore, getDefaultMiddleware, Store } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import userSlice, { IUserState } from './features/userSlice';

export interface State {
  user: IUserState;
}

export const rootReducer = combineReducers({
  user: userSlice,
});

const createStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV === 'development',
  });
  return store;
};

const wrapper = createWrapper<Store<State>>(createStore, {
  debug: true,
});

export default wrapper;
