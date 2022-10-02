import instance from './core';

const getAllChatRooms = () => {
  return instance({
    url: `/api/v1/chat/chatrooms/`,
  });
};

const getChatRoomInfo = (chatRoomId: number) => {
  return instance({ url: `/api/v1/chat/chatroom/detail/${chatRoomId}` });
};

const createChatRoom = (roomName: string, ...participantsId: (number | null | undefined)[]) => {
  return instance({
    method: 'post',
    url: `/api/v1/chat/register`,
    data: {
      roomName,
      participantsId,
    },
  });
};

const leaveChatRoom = (chatRoomId: number, leftUserId: number) => {
  return instance({
    method: 'post',
    url: `/api/v1/chat/${leftUserId}/chatroom/left/`,
    data: {
      chatRoomId,
    },
  });
};

const subInstance = { getChatRoomInfo, createChatRoom, getAllChatRooms, leaveChatRoom };

export default subInstance;
