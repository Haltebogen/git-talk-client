import EditImgButton from '@/buttons/EditImgButton';
import Profile from '@/icons/profile_img.svg';
import styled from 'styled-components';

const Button = styled.div`
  position: absolute;
  padding: 12.5rem 12.5rem 0 0;
`;

export interface EditProfileImgProps {
  profileImg: string | null;
}

const EditProfileImg = ({ profileImg }: EditProfileImgProps) => {
  return (
    <>
      {profileImg ? <div>{profileImg}</div> : <Profile />}
      <Button>
        <EditImgButton />
      </Button>
    </>
  );
};

export default EditProfileImg;
