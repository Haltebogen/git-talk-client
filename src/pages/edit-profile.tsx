import EditCompleteButton from '@/buttons/EditCompleteButton';
import EditProfileImgButton from '@/buttons/EditProfileImgButton';

import { NextPage } from 'next';

const Editprofile: NextPage = () => {
  return (
    <div>
      edit-profile page
      <EditCompleteButton />
      <EditProfileImgButton />
    </div>
  );
};
export default Editprofile;
