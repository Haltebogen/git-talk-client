import { BoxLayout } from '@/boxes/Box';
import FollowerInfo from '@/contents/FollowerInfo';
import ProfileMenu from '@/molecules/followerProfile/ProfileMenu';
import { useSelector } from 'react-redux';
import { State } from 'store/configureStore';
import styled, { css } from 'styled-components';
import { Imember } from 'type';

const FollowerBackgroundBox = styled(BoxLayout)`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
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
  width: 100%;
`;

const FollowerProfile = () => {
  const { name, profileImageUrl, statusMessage } = useSelector<State, Imember>((state) => state.member);
  return (
    <FollowerBackgroundBox boxType="backrgound">
      <Info>
        <FollowerInfo name={name} profileImg={profileImageUrl} stateMessages={statusMessage} />
      </Info>
      <ProfileMenu />
    </FollowerBackgroundBox>
  );
};

export default FollowerProfile;
