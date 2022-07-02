import FollowerListBox from '@/boxes/FollowerListBox';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4375rem;
`;
const ListContainer = () => {
  // 확인을 위해 임시로 컴포넌트 반복 삽입
  return (
    <Container>
      <FollowerListBox name="kimkyungmin" isFollower={true} profileImg={null} statusMessages="우와안녕안낭안녕" />{' '}
      <FollowerListBox name="kimkyungmin" isFollower={true} profileImg={null} statusMessages="우와 안낭안녕안낭안녕안낭안녕안낭안녕안낭안녕" />{' '}
      <FollowerListBox name="kimkyungmin" isFollower={true} profileImg={null} statusMessages="우와 안낭안녕안낭안녕안낭안녕안낭안녕안낭안녕" />{' '}
      <FollowerListBox name="kimkyungmin" isFollower={true} profileImg={null} statusMessages="우와 안낭안녕안낭안녕안낭안녕안낭안녕안낭안녕" />{' '}
    </Container>
  );
};

export default ListContainer;
