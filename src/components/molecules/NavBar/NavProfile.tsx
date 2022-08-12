import ProfileDetail from '@/contents/ProfileDetail';
import ProfileMain from '@/contents/ProfileMain';
import { ButtonLayout } from '@/buttons/Button';
import styled, { css } from 'styled-components';
import Link from 'next/link';

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.0625rem;
  align-items: center;
  width: 100%;
`;

export const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.4375rem;
`;

export const ButtonZone = styled.div`
  display: flex;
  justify-content: center;
`;

const EditButton = styled(ButtonLayout)`
  ${({ theme }) => {
    const { fontSize } = theme;
    return css`
      font-size: ${fontSize.xxs};
      border-radius: 0.625rem;
      padding: 0.3125rem 4.625rem;
    `;
  }}
`;

const NavProfile = () => {
  return (
    <ProfileContainer>
      <ProfileBox>
        <ProfileMain name="Kimkyungmin" id="github_id" profileImg={null} />
        <ButtonZone>
          <Link href="/edit-profile">
            <a>
              <EditButton buttonType="primary" ariaLabel="내 프로필 수정하기">
                Edit profile
              </EditButton>
            </a>
          </Link>
        </ButtonZone>
      </ProfileBox>
      <ProfileBox>
        <ProfileDetail type="FOLLOWER" text="71 following - 96 follower" />
        <ProfileDetail type="COMPANY" text="@WOO-AH~" />
        <ProfileDetail type="MESSAGE" text="오늘도 나는 1Commit을 달린다." />
      </ProfileBox>
    </ProfileContainer>
  );
};

export default NavProfile;
