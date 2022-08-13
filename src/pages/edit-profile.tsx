import EditMyProfile from '@/organisms/editMyProfile/EditMyProfile';
import NavBarLayout from '@/organisms/navBar/NavBarLayout';
import { NextPage } from 'next';

const Editprofile: NextPage = () => {
  return (
    <div>
      <NavBarLayout>
        <EditMyProfile />
      </NavBarLayout>
    </div>
  );
};
export default Editprofile;
