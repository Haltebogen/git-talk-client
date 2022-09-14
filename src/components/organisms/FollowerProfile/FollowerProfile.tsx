import { BoxLayout } from '@/boxes/Box';
import FollowerInfo from '@/contents/FollowerInfo';
import ProfileMenu from '@/molecules/followerProfile/ProfileMenu';
import { useSelector } from 'react-redux';
import { State } from 'store/configureStore';
import { MemberState } from 'store/features/memberSlice';
import styled, { css } from 'styled-components';

const FollowerBackgroundBox = styled(BoxLayout)`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      position: relative;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      background-color: ${colors.profilebgcolor};
      max-width: 44.3125rem;
      max-height: 51.25rem;
      gap: 5.2rem;
    `;
  }}
`;

const Info = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 9.375rem;
  width: 100%;
`;

const MenuZone = styled.div`
  position: absolute;
  bottom: 6.875rem;
  right: 15.53125rem;
`;

const FollowerProfile = () => {
  const { name, profileImageUrl, statusMessage } = useSelector<State, MemberState>((state) => state.member);

  return (
    <FollowerBackgroundBox boxType="background">
      <Info>
        <FollowerInfo name={name} profileImg={profileImageUrl} stateMessages={statusMessage} />
      </Info>
      <MenuZone>
        <ProfileMenu name={name} />
      </MenuZone>
    </FollowerBackgroundBox>
  );
};

export default FollowerProfile;
