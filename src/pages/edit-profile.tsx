import EditMyProfile from '@/organisms/editMyProfile';
import NavBarLayout from '@/organisms/navBar/NavBarLayout';
import useInput from 'hooks/useInput';
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import wrapper, { State } from 'store/configureStore';
import { UserState, setUser, initUser } from 'store/features/userSlice';
import mainInstance from 'utils/api/main';
import onFileUpload from 'utils/onFileUpload';

const Editprofile: NextPage = () => {
  const [statusValue, onStatusChange, setStatusValue] = useInput('');
  const [bioValue, onBioChange, setBioValue] = useInput('');
  const dispatch = useDispatch();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const useData = useSelector<State, UserState>((state) => state.user);

  return (
    <div>
      <NavBarLayout title="Git-Talk _ 프로필 수정">
        <EditMyProfile
          onEditFileClick={() => {
            fileInputRef.current?.click();
          }}
          onImageChange={onFileUpload}
          fileInputref={fileInputRef}
          bioPlaceholder={useData.bio}
          statusPlaceholder={useData.statusMessage}
          name={useData.name}
          nickName={useData.nickName}
          profileImageUrl={useData.profileImageUrl}
          onSubmit={(event) => {
            event.preventDefault();
            dispatch(
              setUser({ nickName: useData.nickName, name: useData.name, profileImageUrl: useData.profileImageUrl, statusMessage: statusValue, bio: bioValue }),
            );
            mainInstance.updateProfile(useData);
            setStatusValue('');
            setBioValue('');
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

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(() => async (context: GetServerSidePropsContext) => {
  initUser(context);
  await initUser(context);
  return { props: {} };
});
