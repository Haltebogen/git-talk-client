import styled from 'styled-components';
import NavProfile from '@/molecules/NavBar/NavProfile';
import NavMenu from '@/molecules/NavBar/NavMenu';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14.375rem;
  width: 100%;
  max-width: 18.125rem;
  padding-top: 3.25rem;
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
