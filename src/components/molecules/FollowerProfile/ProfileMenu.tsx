import { ButtonLayout } from '@/buttons/Button';
import Chat from '@/icons/follower_chat.svg';
import Git from '@/icons/github.svg';
import Link from 'next/link';
import styled, { css } from 'styled-components';

const Menu = styled.div`
  display: flex;
  gap: 3.375rem;
  width: 100%;
  justify-content: center;
  margin: 0;
`;

const MenuButton = styled(ButtonLayout)`
  ${({ theme }) => {
    const { colors, fontSize } = theme;

    return css`
      flex-direction: column;
      gap: 0.5rem;
      span {
        color: ${colors.white};
        font-size: ${fontSize.xs};
      }
    `;
  }}
`;

const ProfileMenu = () => {
  return (
    <Menu>
      {/* 임시 링크 */}
      <Link href="/chat">
        <a>
          <MenuButton buttonType="clear" ariaLabel="일대일 대화하기">
            <Chat />
            <span>1:1 채팅</span>
          </MenuButton>
        </a>
      </Link>
      <a href="https://github.com/Haltebogen">
        <MenuButton buttonType="clear" ariaLabel="깃허브로 이동하기">
          <Git />
          <span>GitHub</span>
        </MenuButton>
      </a>
    </Menu>
  );
};

export default ProfileMenu;
