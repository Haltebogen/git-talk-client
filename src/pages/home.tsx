import SearchBox from '@/boxes/SearchBox';
import FollowerListContainer from '@/molecules/FollowerList/FollowerListContainer';
import FollowerProfile from '@/organisms/FollowerProfile/FollowerProfile';
import NavBarContainer from '@/organisms/NavBar/NavBar';

import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div>
      <NavBarContainer />
      <SearchBox />
      <FollowerListContainer />
      <FollowerProfile />
    </div>
  );
};

export default Home;
