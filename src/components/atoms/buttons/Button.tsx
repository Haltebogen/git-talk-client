import { MouseEventHandler, ReactNode } from 'react';
import styled, { css } from 'styled-components';

const primaryButtonStyles = css`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      background-color: ${colors.primary};
      color: ${colors.white};
      border-radius: 0.25rem;

      &:active {
        background-color: ${colors.clickbtn1};
      }
    `;
  }}
`;

const cancelButtonStyles = css`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      background-color: ${colors.rarely};
      color: ${colors.white};
      border-radius: 0.25rem;

      &:active {
        background-color: ${colors.clickbtn2};
      }
    `;
  }}
`;

const circleButtonStyles = css`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      background-color: ${colors.primary};
      color: ${colors.white};
      border-radius: 50%;

      &:active {
        background-color: ${colors.clickbtn1};
      }
    `;
  }}
`;

const clearButtonStyles = css`
  background-color: transparent;
`;

export const ButtonLayout = styled.button<ButtonProps>`
  display: flex;
  border: none;
  justify-content: center;
  align-items: center;
  padding: 0.5625rem;
  width: 100%;

  &:hover {
    cursor: pointer;
  }

  ${({ buttonType }) => {
    switch (buttonType) {
      case 'primary':
        return primaryButtonStyles;
      case 'cancel':
        return cancelButtonStyles;
      case 'circle':
        return circleButtonStyles;
      case 'clear':
        return clearButtonStyles;
      default:
        return primaryButtonStyles;
    }
  }}
`;

export type ButtonType = 'primary' | 'cancel' | 'circle' | 'clear';

export interface ButtonProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  buttonType: ButtonType;
  disabled?: boolean;
  ariaLabel: string;
  label?: string;
  color?: string;
  width?: string;
}

const Button = ({ children, onClick, ariaLabel, buttonType, disabled, label, color, width }: ButtonProps) => {
  return (
    <ButtonLayout onClick={onClick} ariaLabel={ariaLabel} buttonType={buttonType} disabled={disabled} style={{ color, width }}>
      {label}
      {children}
    </ButtonLayout>
  );
};

export default Button;
