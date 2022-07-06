import SearchBox from '@/boxes/SearchBox';
import FollowerListContainer from '@/molecules/FollowerList/FollowerListContainer';

const home = () => {
  return (
    <div>
      <SearchBox />
      <FollowerListContainer />
    </div>
  );
};

export default home;
