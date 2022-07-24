import FollowerBackgroundBox from '@/boxes/FollowerBackgroundBox';
import FollowerInfo from '@/contents/FollowerInfo';
import ProfileMenu from '@/molecules/FollowerProfile/ProfileMenu';
import styled from 'styled-components';

const Info = styled.div`
  padding: 14.5rem 0 1.25rem 0;
`;

const FollowerProfile = () => {
  return (
    <>
      <FollowerBackgroundBox>
        <Info>
          <FollowerInfo name="김oo" profileImg={null} stateMessages="상태 메시지 입니다." />
        </Info>
        <ProfileMenu />
      </FollowerBackgroundBox>
    </>
  );
};

export default FollowerProfile;
