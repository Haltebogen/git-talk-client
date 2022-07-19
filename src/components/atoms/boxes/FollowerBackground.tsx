import { ReactNode } from 'react';
import styled, { css } from 'styled-components';

export const Background = styled.div`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      background-color: ${colors.followerbgcolor};
      max-width: 44.3125rem;
    `;
  }}
`;

export interface FollowerBackgroundProps {
  children?: ReactNode | null;
}

const FollowerBackground = ({ children }: FollowerBackgroundProps) => {
  return <Background>{children}</Background>;
};

export default FollowerBackground;
