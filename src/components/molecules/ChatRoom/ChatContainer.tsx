import React from 'react';
import ReceiverMsgBox from '@/boxes/ReceiverMsgBox';
import SenderMsgBox from '@/boxes/SenderMsgBox';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  max-width: 53.125rem;
  height: 49.0625rem;
  align-items: center;
  padding: 1.875rem;
`;

const ChatContainer = () => {
  return (
    <Container>
      <ReceiverMsgBox message="안녕하세요 길게 한번 말해보겠습니다 안녕하세요 길게 한번 말해보겠습니다 안녕하세요 길게 한번 말해보겠습니다 안녕하세요 길게 한번 말해보겠습니다 안녕하세요 길게 한번 말해보겠습니다 안녕하세요 길게 한번 말해보겠습니다 안녕하세요 길게 한번 말해보겠습니다 안녕하세요 길게 한번 말해보겠습니다. " />
      <SenderMsgBox message="hihihih" />
      <SenderMsgBox message="hihihihihihihihihihihihihihihihihihihihih" />
      <SenderMsgBox message="hihihih" />
      <ReceiverMsgBox message="난 선영 선영 선영 선영 텍스트 텍스트 텍스트 테스트 " />
      <ReceiverMsgBox message="안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요" />
    </Container>
  );
};

export default ChatContainer;
