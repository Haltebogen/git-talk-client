import styled from 'styled-components';
import NavProfile from '@/molecules/NavBar/NavProfile';
import NavMenu from '@/molecules/NavBar/NavMenu';
import React from 'react';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14.375rem;
  max-width: 18.125rem;
  padding-top: 5.5rem;
`;

const NavBarContainer = () => {
  return (
    <Container>
      <NavProfile />
      <NavMenu />
    </Container>
  );
};

export default NavBarContainer;
