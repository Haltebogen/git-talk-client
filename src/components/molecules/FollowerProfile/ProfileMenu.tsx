import Button from '@/buttons/Button';
import Chat from '@/icons/follower_chat.svg';
import Git from '@/icons/github.svg';
import Link from 'next/link';
import { MouseEventHandler } from 'react';

import styled, { css } from 'styled-components';

const Menu = styled.div`
  display: flex;
  gap: 3.375rem;
  width: 100%;
  justify-content: center;
  margin: 0;
`;

const MenuButton = styled(Button)`
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

interface ProfileMenuProps {
  nickName?: string | null;
  chatLink: string;
  onChatClick: MouseEventHandler<HTMLAnchorElement>;
}

const ProfileMenu = ({ nickName, chatLink, onChatClick }: ProfileMenuProps) => {
  const FOLLOWER_GITHUB = `https://github.com/${nickName}`;

  return (
    <Menu>
      <Link href={chatLink}>
        <a role="button" aria-label="일대일 대화하기" onClick={onChatClick}>
          <MenuButton buttonType="clear">
            <Chat />
            <span>1:1 채팅</span>
          </MenuButton>
        </a>
      </Link>

      <Link href={FOLLOWER_GITHUB} passHref>
        <a role="button" aria-label="깃허브로 이동하기" target="_blank" rel="noreferrer noopener">
          <MenuButton buttonType="clear" buttonRole="link">
            <Git />
            <span>GitHub</span>
          </MenuButton>
        </a>
      </Link>
    </Menu>
  );
};

export default ProfileMenu;
