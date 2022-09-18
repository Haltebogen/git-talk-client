import Button from '@/buttons/Button';
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
}

const ProfileMenu = ({ nickName }: ProfileMenuProps) => {
  const FOLLOWER_GITHUB = `https://github.com/${nickName}`;

  return (
    <Menu>
      {/* 임시 링크 */}
      <Link href="/chat">
        <a role="button" aria-label="일대일 대화하기">
          <MenuButton buttonType="clear" buttonRole="link">
            <Chat />
            <span>1:1 채팅</span>
          </MenuButton>
        </a>
      </Link>
      <a href={FOLLOWER_GITHUB} role="button" aria-label="깃허브로 이동하기" target="_blank" rel="noreferrer noopener">
        <MenuButton buttonType="clear" buttonRole="link">
          <Git />
          <span>GitHub</span>
        </MenuButton>
      </a>
    </Menu>
  );
};

export default ProfileMenu;
