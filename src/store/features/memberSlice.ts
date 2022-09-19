import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

export interface MemberState {
  id?: number | null;
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

const initialState: MemberState = {
  id: null,
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
    setMember: (_, action: PayloadAction<MemberState>) => action.payload,
    extraReducers: (builder) => builder,
    [HYDRATE]: (_, action) => action.payload.member,
  },
});

export const { setMember } = memberSlice.actions;

export default memberSlice.reducer;
