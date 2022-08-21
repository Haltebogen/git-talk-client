import instance from './core';

const searchFollowRequest = (keyword: string, name: string) => {
  return instance({ url: `/api/v1/member/follow/search/${keyword}/${name}` });
};

const subInstance = { searchFollowRequest };

export default subInstance;
