import { ReactNode } from 'react';
import NavBarContainer from './NavBarContainer';
import styled, { css } from 'styled-components';

export const Layout = styled.div`
  display: flex;
  width: 100%;
`;

export const Children = styled.div`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      display: flex;
      width: 100%;
      background-color: ${colors.bgcolor};
    `;
  }}
`;

export interface NavBarLayoutProps {
  children: ReactNode;
}

const NavBarLayout = ({ children }: NavBarLayoutProps) => {
  return (
    <Layout>
      <NavBarContainer />
      <Children>{children}</Children>
    </Layout>
  );
};

export default NavBarLayout;
