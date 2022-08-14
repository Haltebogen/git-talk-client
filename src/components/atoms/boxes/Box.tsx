import { MouseEventHandler, ReactNode } from 'react';
import styled, { css } from 'styled-components';

const listBoxStyles = css`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      border-radius: 0.375rem;
      background-color: ${colors.secondary};

      &:hover {
        background-color: ${colors.hover};
        color: ${colors.white};
      }

      &:active {
        background-color: ${colors.clickbox};
      }
    `;
  }}
`;

const backgroundBoxStyles = css`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      background-color: ${colors.profilebgcolor};
    `;
  }}
`;

export const BoxLayout = styled.button<BoxProps>`
  border-radius: 0.375rem;
  display: flex;
  width: 100%;
  border: none;

  &:hover {
    cursor: pointer;
  }

  ${({ boxType }) => {
    switch (boxType) {
      case 'list':
        return listBoxStyles;
      case 'backrgound':
        return backgroundBoxStyles;
      default:
        return listBoxStyles;
    }
  }}
`;

export type BoxType = 'list' | 'backrgound';

export interface BoxProps {
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  boxType?: BoxType;
  width?: string;
  content?: string;
  color?: string;
}

const Box = ({ children, boxType, onClick, content, width, color, ...props }: BoxProps) => {
  return (
    <BoxLayout boxType={boxType} onClick={onClick} style={{ width, color }} {...props}>
      {content}
      {children}
    </BoxLayout>
  );
};

export default Box;
