import { MouseEventHandler, ReactNode } from 'react';
import styled, { css } from 'styled-components';

interface LoginButtonPRops {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  ariaLabel?: string;
  type?: 'submit' | 'button';
}

const Button = styled.button`
  ${({ theme }) => {
    const { colors, fontSize } = theme;
    return css`
      background-color: ${colors.primary};
      color: ${colors.white};
      border: none;
      padding: 1.25rem 6.875rem; // 수정 예정
      font-size: ${fontSize.lg}; // 수정 예정
      border-radius: 0.625rem;
      &:hover {
        cursor: pointer;
      }
    `;
  }}
`;

const LoginButton = ({ children, ariaLabel, type, onClick }: LoginButtonPRops) => {
  return (
    <div>
      <Button aria-label={ariaLabel} type={type} onClick={onClick}>
        {children}
      </Button>
    </div>
  );
};

export default LoginButton;
