import NavEditProfileButton from '@/buttons/NavEditProfileButton';
import ProfileDetail from '@/contents/ProfileDetail';
import ProfileMain from '@/contents/ProfileMain';
import styled from 'styled-components';

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

export const Button = styled.div`
  display: flex;
  justify-content: center;
`;

const NavProfile = () => {
  return (
    <ProfileContainer>
      <ProfileBox>
        <ProfileMain name="Kimkyungmin" id="github_id" profileImg={null} />
        <Button>
          <NavEditProfileButton />
        </Button>
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
