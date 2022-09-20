import EditImgButton from '@/buttons/EditImgButton';
import Profile from '@/icons/profile_img.svg';
import styled from 'styled-components';
import Image from 'next/image';
import { ChangeEventHandler, MouseEventHandler, RefObject } from 'react';

const Button = styled.div`
  position: absolute;
  padding: 12.5rem 12.5rem 0 0;
`;

const ImageZone = styled(Image)`
  border-radius: 50%;
`;

export interface EditProfileImgProps {
  profileImg?: string | null;
  fileInputref: RefObject<HTMLInputElement>;
  onImageChange: ChangeEventHandler<HTMLInputElement>;
  onEditFileClick: MouseEventHandler<HTMLDivElement>;
}

const EditProfileImg = ({ profileImg, fileInputref, onImageChange, onEditFileClick }: EditProfileImgProps) => {
  return (
    <>
      {profileImg ? <ImageZone src={profileImg} alt="프로필 이미지" width={335} height={335} unoptimized={true} /> : <Profile />}
      <input type="file" hidden={true} ref={fileInputref} onChange={onImageChange} />
      <Button onClick={onEditFileClick}>
        <EditImgButton />
      </Button>
    </>
  );
};

export default EditProfileImg;
