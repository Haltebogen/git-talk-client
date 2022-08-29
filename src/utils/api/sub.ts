import { Imember } from 'type';
import instance from './core';

const getUserInfo = () => {
  return instance({ url: `/api/v1/member` });
};

const getUsernoti = () => {
  return instance({ url: `/api/v1/notification` });
};

const getFollows = () => {
  return instance({ url: `/api/v1/member/follows` });
};

const createFollow = (id: number) => {
  return instance({
    method: 'post',
    url: `/api/v1/member/follow`,
    data: {
      followStatus: 'PENDING',
      following: id,
    },
  });
};

const allowFollow = (id: number) => {
  return instance({
    method: 'post',
    url: `/api/v1/member/follow/allow`,
    data: {
      followStatus: 'COMPLETED',
      following: id,
    },
  });
};

const searchFollow = (keyword: string) => {
  return instance({ url: `/api/v1/member/follow/search?keyword=${keyword}` });
};

const updateProfile = (data: Imember[]) => {
  return instance({
    method: 'put',
    url: `/api/v1/member`,
    data,
  });
};

const subInstance = { getUserInfo, getUsernoti, getFollows, createFollow, allowFollow, searchFollow, updateProfile };

export default subInstance;
