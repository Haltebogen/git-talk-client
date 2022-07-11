import styled, { css } from 'styled-components';
import ProfileImg from '@/icons/navProfileImg.svg';
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
    `;
  }}
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
      <div>
        {profileImg ? (
          <div className="profileImg">{profileImg}</div>
        ) : (
          <div className="profileImg">
            <ProfileImg />
          </div>
        )}
      </div>
      <Name>{name}</Name>
      <Id>{id}</Id>
    </Container>
  );
};

export default ProfileMain;
