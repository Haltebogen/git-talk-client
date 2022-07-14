import SearchBox from '@/boxes/SearchBox';
import FollowerListContainer from '@/molecules/FollowerList/FollowerListContainer';
import NavBarContainer from '@/organisms/NavBar/NavBarContainer';

import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div>
      <NavBarContainer />
      <SearchBox />
      <FollowerListContainer />
    </div>
  );
};

export default Home;
