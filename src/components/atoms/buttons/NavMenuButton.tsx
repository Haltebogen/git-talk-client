import Home from '@/icons/home.svg';
import Chat from '@/icons/chat.svg';
import NOTI from '@/icons/bell.svg';
import styled, { css } from 'styled-components';
import Link from 'next/link';

export const Button = styled.div`
  ${({ theme }) => {
    const { colors, fontSize } = theme;
    return css`
      border: none;
      display: flex;
      gap: 1.375rem;
      width: 100%;
      align-items: center;
      color: ${colors.navy};
      font-size: ${fontSize.xs};

      &:hover {
        cursor: pointer;
        color: ${colors.purple};
        // TODO: svg색상 바뀌게
      }
    `;
  }}
`;

export interface NavMenuButtonProps {
  type: 'HOME' | 'CHAT' | 'NOTI';
  content: string;
  link: string;
}

const NavMenuButton = ({ content, type, link }: NavMenuButtonProps) => {
  return (
    <Link href={link}>
      <Button>
        {type === 'HOME' && <Home />}
        {type === 'CHAT' && <Chat />}
        {type === 'NOTI' && <NOTI />}
        {content}
      </Button>
    </Link>
  );
};
export default NavMenuButton;
