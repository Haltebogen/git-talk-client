import FollowerList from '@/organisms/followerList/FollowerList';
import FollowerProfile from '@/organisms/followerProfile/FollowerProfile';
import NavBarLayout from '@/organisms/navBar/NavBarLayout';
import { NextPage } from 'next';
import { Container, Area } from 'styles/home';

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
