import {
  NEW_CHAT_ROOM,
  LEAVE_CHAT_ROOM,
  SEND_MESSAGE,
  RECEIVE_MESSAGE
} from '_actions/types';

import {
  createChatRoom,
  leaveChatRoom,
  sendMessage,
  receiveMessage
} from '_actions/ChatAction'

type ChatAction = 
  | ReturnType<typeof createChatRoom>
  | ReturnType<typeof leaveChatRoom>
  | ReturnType<typeof sendMessage>
  | ReturnType<typeof receiveMessage>;

type ChatState = {
  chat: Array<Array<String>>;
}

const initialState: ChatState = {
  chat : []
}

export default function chatReducer(
  state: ChatState = initialState,
  action: ChatAction
  ) : ChatState {
    switch(action.type) {
      case NEW_CHAT_ROOM:
        state.chat[action.payload.id] = [...action.payload.messages];
        return {...state};
      default:
        return state;
    }
    
}