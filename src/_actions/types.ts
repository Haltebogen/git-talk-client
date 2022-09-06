const NEW_CHAT_ROOM = "new_chat_room" as const;
const LEAVE_CHAT_ROOM = "leave_chat_room" as const;
const SEND_MESSAGE = "send_message" as const;
const RECEIVE_MESSAGE = "receive_message" as const;

export const newChatRoom = () => ({
  type: NEW_CHAT_ROOM
});

export const leaveChatRoom = () => ({
  type: LEAVE_CHAT_ROOM
});

export const sendMessage = () => ({
  type: SEND_MESSAGE
});

export const receiveMessage = () => ({
  type: RECEIVE_MESSAGE
});