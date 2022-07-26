import SearchBox from '@/molecules/search/SearchBox';
import FollowerListContainer from '@/molecules/followerList/FollowerListContainer';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 1.25rem;
`;

const FollowerList = () => {
  return (
    <Container>
      <SearchBox />
      <FollowerListContainer />
    </Container>
  );
};

export default FollowerList;
