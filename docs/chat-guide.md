# Chatting Guide

## Redux Action

### Create ChatRoom

```js
export const createChatRoom = (targetChatRoomInfo) => ({
  type: NEW_CHAT_ROOM,
  payload: targetChatRoomInfo,
});
```
