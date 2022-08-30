import axios from 'axios';
import { getCookieToken } from 'utils/storage/authCookie';

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
});

instance.defaults.timeout = 3000;

instance.interceptors.request.use(
  (config) => {
    config.withCredentials = true;

    const accessToken = getCookieToken();

    if (config.headers && accessToken) config.headers['Authorization'] = `Bearer ${accessToken}`;
    return config;
  },

  (error) => {
    console.log(error);

    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (response) => {
    const res = response.data;
    return res;
  },
  (error) => {
    console.log(error);

    const code = error.code;
    const status = error.response?.status;
    // TODO: token만료시 refreshToken 요청
    if (code === 'ECONNABORTED' || status === 408) {
      alert('요청이 만료되었습니다.');
    }

    return Promise.reject(error);
  },
);

export default instance;
