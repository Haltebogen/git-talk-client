import { AnyAction, createSlice, PayloadAction, Store } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { State } from 'store/configureStore';

export interface UserState {
  bio?: string;
  company?: string;
  email?: string;
  followersNum?: number;
  followingsNum?: number;
  name?: string;
  nickName?: string;
  profileImageUrl?: string;
  statusMessage?: string;
}

const initialState: UserState = {
  bio: '',
  company: '',
  email: '',
  followersNum: 0,
  followingsNum: 0,
  name: '',
  nickName: '',
  profileImageUrl: '',
  statusMessage: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (_, action: PayloadAction<UserState>) => action.payload,
    editUser: (state, action: PayloadAction<UserState>) => (state ? { ...state, ...action.payload } : state),
    logout: () => initialState,
    extraReducers: (builder) => builder,
    [HYDRATE]: (_, action) => action.payload.user,
  },
});

export const { setUser, editUser, logout } = userSlice.actions;

export async function initUser(store: Store<State, AnyAction>) {
  const { user } = store.getState();
  store.dispatch(setUser(user));
  return { user };
}

export default userSlice.reducer;
