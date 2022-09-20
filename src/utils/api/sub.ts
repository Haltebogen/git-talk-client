import instance from './core';

const getAllChatRooms = (userId: number) => {
  return instance({ url: `/api/v1/chat/chatroom/${userId}}` });
};

const getChatRoomInfo = (chatRoomId: number) => {
  return instance({ url: `/api/v1/chat/chatroom/detail/${chatRoomId}` });
};

const createChatRoom = (participantsId: number, roomName: string) => {
  return instance({
    method: 'post',
    url: `/api/v1/chat/register`,
    data: {
      participantsId: [participantsId],
      roomName,
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
