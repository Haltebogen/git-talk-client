import styled, { css } from 'styled-components';
import ProfileImg from '@/icons/profile_img.svg';
import Image from 'next/image';

export const Container = styled.div`
  ${({ theme }) => {
    const { colors, fontSize } = theme;
    return css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 0.375rem;
      font-size: ${fontSize.xs};
      color: ${colors.gray};
      width: 100%;

      .defaultProfileImg {
        transform: scale(0.4);
        width: 100%;
        max-width: 6.1875rem;
        max-height: 6.1875rem;
        margin-bottom: 2.5rem;
        margin-right: 4rem;
      }
    `;
  }}
`;

const ImageZone = styled(Image)`
  border-radius: 50%;
`;

export const Name = styled.div`
  ${({ theme }) => {
    const { colors, fontSize } = theme;
    return css`
      font-size: ${fontSize.lg};
      color: ${colors.black};
    `;
  }}
`;

export const Id = styled.div`
  ${({ theme }) => {
    const { colors, fontSize } = theme;
    return css`
      font-size: ${fontSize.xxs};
      color: ${colors.lightgray};
    `;
  }}
`;

export interface ProfileMainProps {
  name?: string;
  profileImg: string | null;
  id?: string;
}

const ProfileMain = ({ name, id, profileImg }: ProfileMainProps) => {
  return (
    <Container>
      {profileImg ? (
        <ImageZone src={profileImg} alt="프로필 이미지" width={140} height={140} unoptimized={true} />
      ) : (
        <div className="defaultProfileImg">
          <ProfileImg />
        </div>
      )}

      <Name>{name}</Name>
      <Id>{id}</Id>
    </Container>
  );
};

export default ProfileMain;
