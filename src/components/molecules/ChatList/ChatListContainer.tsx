import ChatListBox from '@/boxes/ChatListBox';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.4375rem;
  align-items: center;
`;

const ChatListContainer = () => {
  // 확인을 위해 임시로 컴포넌트 반복 삽입
  return (
    <Container>
      <ChatListBox name="김ㅇㅇ" profileImg={null} messages="받은 메시지 내용 " time="12:10" msgCount="2" />
    </Container>
  );
};

export default ChatListContainer;
