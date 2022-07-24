import Chat from '@/icons/follower_chat.svg';
import Git from '@/icons/github.svg';
import Link from 'next/link';
import styled, { css } from 'styled-components';

export const Button = styled.div`
  ${({ theme }) => {
    const { colors, fontSize } = theme;
    return css`
      width: 100%;

      a {
        color: ${colors.white};
        font-size: ${fontSize.xs};
      }
    `;
  }}
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export interface FollowerDetailsButtonProps {
  type: 'CHAT' | 'GIT';
  link: string;
}

const FollowerDetailsButton = ({ type, link }: FollowerDetailsButtonProps) => {
  return (
    <Button>
      <Link href={link}>
        <a>
          {type === 'CHAT' && (
            <Menu>
              <Chat />
              <span>1:1 채팅</span>
            </Menu>
          )}

          {type === 'GIT' && (
            <Menu>
              <Git />
              <span>GitHub</span>
            </Menu>
          )}
        </a>
      </Link>
    </Button>
  );
};

export default FollowerDetailsButton;
