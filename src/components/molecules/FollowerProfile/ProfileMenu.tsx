import FollowerDetailsButton from '@/buttons/FollowerDetailsButton';
import styled from 'styled-components';

const Menu = styled.div`
  display: flex;
  gap: 3.375rem;
  width: 100%;
  justify-content: center;
  margin: 0;
`;

const ProfileMenu = () => {
  return (
    <Menu>
      {/* 임시 링크 */}
      <div>
        <FollowerDetailsButton type="CHAT" link="/chat" />
      </div>
      <div>
        <FollowerDetailsButton type="GIT" link="https://github.com/Haltebogen" />
      </div>
    </Menu>
  );
};

export default ProfileMenu;
