import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import { AnyAction, CombinedState, combineReducers, configureStore, Reducer, Store } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import userSlice, { UserState } from './features/userSlice';
import memberSlice, { MemberState } from './features/memberSlice';

export interface State {
  user: UserState;
  member: MemberState;
}

const rootReducer = (state: State, action: AnyAction): CombinedState<State> => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;

    default: {
      const combinedReducer = combineReducers({
        user: userSlice,
        member: memberSlice,
      });
      return combinedReducer(state, action);
    }
  }
};

const createStore = () => {
  const store = configureStore({
    reducer: rootReducer as Reducer<State, AnyAction>,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV === 'development',
  });
  return store;
};

const wrapper = createWrapper<Store<State>>(createStore, {
  debug: true,
});

export default wrapper;
