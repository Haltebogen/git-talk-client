import FollowerListBox from '@/boxes/FollowerListBox';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4375rem;
`;
const FollowerListContainer = () => {
  // 확인을 위해 임시로 컴포넌트 반복 삽입
  return (
    <Container>
      <FollowerListBox name="kimkyungmin" profileImg={null} statusMessage="상태메시지" />{' '}
      <FollowerListBox name="kimkyungmin" profileImg={null} statusMessage="상태메시지" />{' '}
      <FollowerListBox name="kimkyungmin" profileImg={null} statusMessage="상태메시지" />{' '}
      <FollowerListBox name="kimkyungmin" profileImg={null} statusMessage="상태메시지" />{' '}
    </Container>
  );
};

export default FollowerListContainer;
