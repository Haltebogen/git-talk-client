import {
  newChatRoom, 
  leaveChatRoom, 
  sendMessage, 
  receiveMessage
} from '_actions/types';

type ChatAction = 
  | ReturnType<typeof newChatRoom>
  | ReturnType<typeof leaveChatRoom>
  | ReturnType<typeof sendMessage>
  | ReturnType<typeof receiveMessage>;

type ChatState = {
  chat: Array<Array<String>>;
}
