import FollowerList from '@/organisms/FollowerList/FollowerList';
import FollowerProfile from '@/organisms/FollowerProfile/FollowerProfile';
import NavBarLayout from '@/organisms/NavBar/NavBarLayout';
import { NextPage } from 'next';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
`;

export const Area = styled.div`
  display: flex;
  flex-grow: 1;
  width: 100%;
  justify-content: center;
  margin-top: 5.625rem;
`;

const Home: NextPage = () => {
  return (
    <Container>
      <NavBarLayout>
        <Area>
          <FollowerList />
        </Area>
        <Area>
          <FollowerProfile />
        </Area>
      </NavBarLayout>
    </Container>
  );
};

export default Home;
