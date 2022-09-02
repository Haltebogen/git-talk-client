import EditMyProfile from '@/organisms/editMyProfile/EditMyProfile';
import NavBarLayout from '@/organisms/navBar/NavBarLayout';
import useInput from 'hooks/useInput';
import { GetServerSideProps, NextPage } from 'next';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from 'store/configureStore';
import { IUserState, setUser } from 'store/features/userSlice';
import subInstance from 'utils/api/sub';

const Editprofile: NextPage = () => {
  const [statusValue, onStatusChange, setStatusValue] = useInput('');
  const [bioValue, onBioChange, setBioValue] = useInput('');
  const { name, nickName, profileImageUrl, statusMessage, bio } = useSelector<State, IUserState>((state) => state.user);
  const dispatch = useDispatch();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const onImageChange = () => {
    console.log('change');
  };
  const onEditFileClick = () => {
    console.log('chilck');
  };

  return (
    <div>
      <NavBarLayout title="Git-Talk _ 프로필 수정">
        <EditMyProfile
          onEditFileClick={onEditFileClick}
          onImageChange={onImageChange}
          fileInputref={fileInputRef}
          bioPlaceholder={bio}
          statusPlaceholder={statusMessage}
          name={name}
          nickName={nickName}
          profileImageUrl={profileImageUrl}
          onSubmit={(event) => {
            event.preventDefault();
            subInstance.updateProfile(statusValue, bioValue);
            setStatusValue('');
            setBioValue('');
            dispatch(setUser({ name, nickName, profileImageUrl, statusMessage: statusValue, bio: bioValue }));
          }}
          statusValue={statusValue}
          onStatusChange={onStatusChange}
          bioValue={bioValue}
          onBioChange={onBioChange}
        />
      </NavBarLayout>
    </div>
  );
};
export default Editprofile;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {
    req: { cookies },
  } = context;

  const isLogin = cookies['access_token'];

  if (!isLogin) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: { cookies },
  };
};
