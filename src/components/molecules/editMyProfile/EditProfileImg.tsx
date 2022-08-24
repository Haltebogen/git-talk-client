import EditImgButton from '@/buttons/EditImgButton';
import Profile from '@/icons/profile_img.svg';
import styled from 'styled-components';
import Image from 'next/image';

const Button = styled.div`
  position: absolute;
  padding: 12.5rem 12.5rem 0 0;
`;

const ImageZone = styled(Image)`
  border-radius: 50%;
`;

export interface EditProfileImgProps {
  profileImg: string | null | undefined;
}

const EditProfileImg = ({ profileImg }: EditProfileImgProps) => {
  return (
    <>
      {profileImg ? <ImageZone src={profileImg} alt="프로필 이미지" width={335} height={335} unoptimized={true} /> : <Profile />}
      <Button>
        <EditImgButton />
      </Button>
    </>
  );
};

export default EditProfileImg;
