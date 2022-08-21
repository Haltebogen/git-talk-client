import instance from './core';

const getUserInfo = (userName: string) => {
  return instance({ url: `/api/v1/member/${userName}` });
};

const createFollow = () => {
  instance({
    method: 'post',
    url: `/api/v1/member/follow`,
    data: {
      followStatus: 'COMPLETED',
      following: 0,
    },
  });
};

const allowFollow = () => {
  instance({
    method: 'post',
    url: `/api/v1/member/follow/allow`,
    data: {
      followStatus: 'COMPLETED',
      following: 0,
    },
  });
};

const mainInstance = { getUserInfo, createFollow, allowFollow };

export default mainInstance;
