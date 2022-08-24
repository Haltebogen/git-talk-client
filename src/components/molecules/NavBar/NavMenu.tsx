import Home from '@/icons/home.svg';
import Chat from '@/icons/chat.svg';
import NOTI from '@/icons/bell.svg';
import LOGOUT from '@/icons/logout.svg';
import styled, { css } from 'styled-components';
import Link from 'next/link';
import Button from '@/buttons/Button';

export const MenuContainer = styled.div`
  ${({ theme }) => {
    const { colors, fontSize } = theme;
    return css`
      display: flex;
      flex-direction: column;
      gap: 3.25rem;
      font-size: ${fontSize.xs};
      color: ${colors.gray};
      padding-left: 2.3125rem;
    `;
  }}
`;

export const Bottom = styled.div`
  padding: 4rem 0 2rem 0;
`;

export const MenuButton = styled(Button)`
  ${({ theme }) => {
    const { colors, fontSize } = theme;
    return css`
      gap: 1.375rem;
      color: ${colors.navy};
      font-size: ${fontSize.xs};
      justify-content: flex-start;

      &:hover {
        color: ${colors.purple};
      }
    `;
  }}
`;

interface NavMenuProps {
  onClick: () => void;
}

const NavMenu = ({ onClick }: NavMenuProps) => {
  return (
    <>
      <MenuContainer>
        <Link href="/home">
          <a aria-label="홈으로 가기" role="button">
            <MenuButton buttonType="clear" buttonRole="link">
              <Home />
              HOME
            </MenuButton>
          </a>
        </Link>
        <Link href="/chat">
          <a aria-label="채팅하기" role="button">
            <MenuButton buttonType="clear" buttonRole="link">
              <Chat />
              CHAT
            </MenuButton>
          </a>
        </Link>
        <Link href="/notification">
          <a aria-label="알림 확인하기" role="button">
            <MenuButton buttonType="clear" buttonRole="link">
              <NOTI />
              NOTIFICATION
            </MenuButton>
          </a>
        </Link>
        <Bottom onClick={onClick}>
          <Link href="/">
            <a aria-label="로그아웃하기" role="button">
              <MenuButton buttonType="clear" buttonRole="link">
                <LOGOUT />
                LOG OUT
              </MenuButton>
            </a>
          </Link>
        </Bottom>
      </MenuContainer>
    </>
  );
};

export default NavMenu;
