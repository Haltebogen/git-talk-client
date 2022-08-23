import instance from './core';

const fetcher = (url: string) => instance.get(url).then((response) => response.data);
export default fetcher;
