# Chatting Guide

## Redux Action

<br />

### Create ChatRoom

```js
export const createChatRoom = (targetChatRoomInfo) => ({
  type: NEW_CHAT_ROOM,
  payload: targetChatRoomInfo,
});
```

<br />

### Leave ChatRoom

```js
export const leaveChatRoom = (targetChatRoomInfo) => ({
  type: LEAVE_CHAT_ROOM,
  payload: targetChatRoomInfo,
});
```

<br />

### Send Message

```js
export const sendNewMessage = (message) => ({
  type: SEND_MESSAGE,
  payload: message,
});
```

<br />

### Receive Message

```js
export const receiveMessage = (message) => ({
  type: RECEIVE_MESSAGE,
  payload: message,
});
```
