import SearchBox from '@/boxes/SearchBox';
import FollowerListContainer from '@/molecules/FollowerList/FollowerListContainer';
import styled from 'styled-components';

export const Container = styled.div`
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
