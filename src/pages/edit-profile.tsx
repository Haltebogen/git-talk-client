import EditMyProfile from '@/organisms/editMyProfile/EditMyProfile';
import NavBarLayout from '@/organisms/navBar/NavBarLayout';

import { NextPage } from 'next';

const Editprofile: NextPage = () => {
  return (
    <div>
      <NavBarLayout title="Git-Talk _ 프로필 수정">
        <EditMyProfile />
      </NavBarLayout>
    </div>
  );
};
export default Editprofile;
