import EditProfileUserInfo from '@/contents/EditProfileUserInfo';
import EditProfileContainer from '@/molecules/editMyProfile/EditProfileContainer';

const EditMyProfile = () => {
  return (
    <div>
      <EditProfileUserInfo name="Kimkyungmin" id="github_id" />
      <EditProfileContainer title="Status Message" details="상태 메시지는 최대 50 자까지 작성하실 수 있습니다." />
      <EditProfileContainer title="Bio" details="자기소개는 최대 500자까지 작성이 가능합니다. 욕설이나 비방을 하는 글은 자제해 주세요." />
    </div>
  );
};

export default EditMyProfile;
