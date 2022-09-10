import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  bio: string | null;
  company: string | null;
  email: string | null;
  followersNum: number | null;
  followingsNum: number | null;
  name: string | null;
  nickName: string | null;
  profileImageUrl: string | null;
  statusMessage: string | null;
}

const initialState: UserState = {
  bio: null,
  company: null,
  email: null,
  followersNum: null,
  followingsNum: null,
  name: null,
  nickName: null,
  profileImageUrl: null,
  statusMessage: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (_, action: PayloadAction<UserState>) => action.payload,
    logout: () => initialState,
    extraReducers: (builder) => builder,
  },
});

export const { logout, setUser } = userSlice.actions;

export default userSlice.reducer;
