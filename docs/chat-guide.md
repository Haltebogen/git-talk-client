# Chatting Guide

## Redux Action

### Create ChatRoom

```js
export const createChatRoom = (targetChatRoomInfo) => ({
  type: NEW_CHAT_ROOM,
  payload: targetChatRoomInfo,
});
```

### Leave ChatRoom

```js
export const leaveChatRoom = (targetChatRoomInfo) => ({
  type: LEAVE_CHAT_ROOM,
  payload: targetChatRoomInfo,
});
```
