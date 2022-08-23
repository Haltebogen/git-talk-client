import { serialize, CookieSerializeOptions } from 'cookie';
import { NextApiResponse } from 'next';
import Cookies from 'js-cookie';

export const setRefreshToken = (res: NextApiResponse, accesshToken: string, refreshToken: string) => {
  const today = new Date();
  const expireDate = today.setDate(today.getDate() + 7);

  const options: CookieSerializeOptions = {
    // httpOnly: true,
    secure: process.env.NODE_ENV !== 'development',
    sameSite: 'strict',
    maxAge: expireDate,
    path: '/',
  };

  const serialised = [serialize('access_token', accesshToken, options), serialize('refresh_token', refreshToken, options)];

  res.setHeader('Set-Cookie', serialised);
};

export const getCookieToken = () => {
  return Cookies.get('access_token');
};

export const removeCookieToken = () => {
  return Cookies.remove('access_token', { sameSite: 'strict', path: '/' });
};
