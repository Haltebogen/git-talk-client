const NEW_CHAT_ROOM = "new_chat_room" as const;
const LEAVE_CHAT_ROOM = "leave_chat_room" as const;
const SEND_MESSAGE = "send_message" as const;
const RECEIVE_MESSAGE = "receive_message" as const;

export const new_chat_room = () => ({
  type: NEW_CHAT_ROOM
});

export const leave_chat_room = () => ({
  type: LEAVE_CHAT_ROOM
});

export const send_message = () => ({
  type: SEND_MESSAGE
});

export const receive_message = () => ({
  type: RECEIVE_MESSAGE
});