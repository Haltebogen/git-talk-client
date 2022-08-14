import { createWrapper } from 'next-redux-wrapper';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';

export const rootReducer = {
  // user: userSlice.reducer,
};

const createStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: true,
  });
  return store;
};

const wrapper = createWrapper(createStore, {
  debug: true,
});

export default wrapper;
