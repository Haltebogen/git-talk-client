import { ReactNode } from 'react';
import NavBar from './NavBar';
import styled, { css } from 'styled-components';
import Head from 'next/head';

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
  title: string;
}

const NavBarLayout = ({ children, title }: NavBarLayoutProps) => {
  return (
    <Layout>
      <NavBar />
      <Head>
        <title>{title}</title>
      </Head>
      <Children>{children}</Children>
    </Layout>
  );
};

export default NavBarLayout;
