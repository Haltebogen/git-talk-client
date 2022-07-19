import FollowerBackground from '@/boxes/FollowerBackground';
import FollowerInfo from '@/contents/FollowerInfo';
import ProfileMenu from '@/molecules/FollowerProfile/ProfileMenu';
import styled from 'styled-components';

const Info = styled.div`
  padding: 17.5rem 0 1.25rem 0;
`;

const Menu = styled.div`
  padding-bottom: 5.25rem;
`;

const FollowerProfile = () => {
  return (
    <>
      <FollowerBackground>
        <Info>
          <FollowerInfo name="김oo" profileImg={null} stateMessages="상태 메시지 입니다." />
        </Info>
        <Menu>
          <ProfileMenu />
        </Menu>
      </FollowerBackground>
    </>
  );
};

export default FollowerProfile;
