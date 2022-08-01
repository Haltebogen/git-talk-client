import { MouseEventHandler, ReactNode } from 'react';
import styled, { css } from 'styled-components';

export const Button = styled.button`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      border-radius: 0.25rem;
      display: flex;
      border: none;
      color: ${colors.white};
      justify-content: center;
      align-items: center;
      padding: 0.5625rem;
      width: 100%;

      &:hover {
        cursor: pointer;
      }
    `;
  }}
`;

export const OK = styled(Button)`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      background-color: ${colors.primary};

      &:active {
        background-color: ${colors.clickbtn1};
      }
    `;
  }}
`;

export const NO = styled(Button)`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      background-color: ${colors.rarely};

      &:active {
        background-color: ${colors.clickbtn2};
      }
    `;
  }}
`;

export const Clear = styled(Button)`
  background-color: transparent;
`;

interface BasicButtonProps {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
  ariaLabel: string;
  form: 'OK' | 'NO' | 'CLEAR';
  disabled?: boolean;
}

const BasicButton = ({ children, onClick, ariaLabel, form, disabled }: BasicButtonProps) => {
  return (
    <>
      {form === 'OK' && (
        <OK onClick={onClick} aria-label={ariaLabel} disabled={disabled}>
          {children}
        </OK>
      )}

      {form === 'NO' && (
        <NO onClick={onClick} aria-label={ariaLabel} disabled={disabled}>
          {children}
        </NO>
      )}

      {form === 'CLEAR' && (
        <Clear onClick={onClick} aria-label={ariaLabel} disabled={disabled}>
          {children}
        </Clear>
      )}
    </>
  );
};

export default BasicButton;
