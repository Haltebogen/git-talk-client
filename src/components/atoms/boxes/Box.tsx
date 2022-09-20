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
        cursor: pointer;
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

const messageBoxStyles = css`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      padding: 0.75rem;
      word-break: break-all;
      background-color: ${colors.primary};
      max-width: 32.5rem;
      color: ${colors.white};
      border-radius: 0rem 0.625rem 0.625rem 0.625rem;
    `;
  }}
`;

export const BoxLayout = styled.div<BoxProps>`
  border-radius: 0.375rem;
  display: flex;
  width: 100%;
  border: none;

  ${({ boxType }) => {
    switch (boxType) {
      case 'list':
        return listBoxStyles;
      case 'background':
        return backgroundBoxStyles;
      case 'message':
        return messageBoxStyles;
      default:
        return listBoxStyles;
    }
  }}
`;

export type BoxType = 'list' | 'background' | 'message';

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
