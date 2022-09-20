import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GetServerSidePropsContext } from 'next';
import { HYDRATE } from 'next-redux-wrapper';

export interface UserState {
  bio: string | null;
  company?: string | null;
  email?: string | null;
  followersNum?: number | null;
  followingsNum?: number | null;
  name: string | null;
  nickName: string | null;
  profileImageUrl?: string | null;
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
    [HYDRATE]: (_, action) => action.payload.user,
  },
});

export const { logout, setUser } = userSlice.actions;

export async function initUser(context: GetServerSidePropsContext) {
  try {
    const {
      req: { cookies },
    } = context;

    const isLogin = cookies['access_token'];

    if (!isLogin) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      };
    }

    return {
      props: { cookies },
    };
  } catch (err) {
    console.error(err);
  }
}

export default userSlice.reducer;
