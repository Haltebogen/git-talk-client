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

export const BoxLayout = styled.div<BoxProps>`
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
      case 'background':
        return backgroundBoxStyles;
      default:
        return listBoxStyles;
    }
  }}
`;

export type BoxType = 'list' | 'background';

export interface BoxProps {
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLDivElement>;
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
