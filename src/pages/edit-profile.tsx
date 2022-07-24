import EditCompleteButton from '@/buttons/EditCompleteButton';
import EditProfileImgButton from '@/buttons/EditProfileImgButton';
import NavBarLayout from '@/organisms/NavBar/NavBarLayout';
import { NextPage } from 'next';

const Editprofile: NextPage = () => {
  return (
    <div>
      <NavBarLayout>
        edit-profile page
        <EditCompleteButton />
        <EditProfileImgButton />
      </NavBarLayout>
    </div>
  );
};
export default Editprofile;
