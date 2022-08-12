import Home from '@/icons/home.svg';
import Chat from '@/icons/chat.svg';
import NOTI from '@/icons/bell.svg';
import LOGOUT from '@/icons/logout.svg';
import styled, { css } from 'styled-components';
import Link from 'next/link';
import { ButtonLayout } from '@/buttons/Button';

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
  padding-top: 4rem;
`;

export const MenuButton = styled(ButtonLayout)`
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

const NavMenu = () => {
  return (
    <>
      <MenuContainer>
        <Link href="/home">
          <a>
            <MenuButton buttonType="clear" ariaLabel="홈으로 가기">
              <Home />
              HOME
            </MenuButton>
          </a>
        </Link>
        <Link href="/chat">
          <a>
            <MenuButton buttonType="clear" ariaLabel="채팅하기">
              <Chat />
              CHAT
            </MenuButton>
          </a>
        </Link>
        <Link href="/notification">
          <a>
            <MenuButton buttonType="clear" ariaLabel="알림 확인 하기">
              <NOTI />
              NOTIFICATION
            </MenuButton>
          </a>
        </Link>
        <Bottom>
          <Link href="/">
            <a>
              <MenuButton buttonType="clear" ariaLabel="홈으로 가기">
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
