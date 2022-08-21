import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
});

instance.defaults.timeout = 3000;

instance.interceptors.request.use(
  (config) => {
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

    if (code === 'ECONNABORTED' || status === 408) {
      alert('요청이 만료되었습니다.');
    }

    return Promise.reject(error);
  },
);

export default instance;
