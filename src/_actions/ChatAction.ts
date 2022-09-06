import { NEW_CHAT_ROOM, LEAVE_CHAT_ROOM, RECEIVE_MESSAGE, SEND_MESSAGE } from "./types";
import { TargetChatRoom } from "./ChatActionTypes";

export const createChatRoom = (targetChatRoom: TargetChatRoom) => ({
  type: NEW_CHAT_ROOM,
  payload: targetChatRoom,
});
