import NavProfile from '@/molecules/navBar/NavProfile';
import NavMenu from '@/molecules/navBar/NavMenu';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10rem;
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
