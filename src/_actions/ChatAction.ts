import { NEW_CHAT_ROOM, LEAVE_CHAT_ROOM, RECEIVE_MESSAGE, SEND_MESSAGE } from "./types";
import { TargetChatRoom, TargetMessage } from "./ChatActionTypes";

export const createChatRoom = (targetChatRoom: TargetChatRoom) => ({
  type: NEW_CHAT_ROOM,
  payload: targetChatRoom,
});

export const leaveChatRoom = (targetChatRoom: TargetChatRoom) => ({
  type: LEAVE_CHAT_ROOM,
  payload: targetChatRoom,
});

export const sendMessage = (targetMessage: TargetMessage) => ({
  type: SEND_MESSAGE,
  payload: targetMessage,
});

export const receiveMessage = (targetMessage: TargetMessage) => ({
  type: RECEIVE_MESSAGE,
  payload: targetMessage,
});