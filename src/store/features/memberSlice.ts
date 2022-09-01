import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IMemberState {
  bio?: string | null;
  company?: string | null;
  email?: string | null;
  followersNum?: number | null;
  followingsNum?: number | null;
  name?: string | null;
  nickName?: string | null;
  profileImageUrl?: string | null;
  statusMessage?: string | null;
}

const initialState: IMemberState = {
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

export const memberSlice = createSlice({
  name: 'member',
  initialState,
  reducers: {
    setMember: (_, action: PayloadAction<IMemberState>) => action.payload,
    extraReducers: (builder) => builder,
  },
});

export const { setMember } = memberSlice.actions;

export default memberSlice.reducer;
