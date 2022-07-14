import NavMenuButton from '@/buttons/NavMenuButton';
import styled, { css } from 'styled-components';

export const MenuContainer = styled.div`
  ${({ theme }) => {
    const { colors, fontSize } = theme;
    return css`
      display: flex;
      flex-direction: column;
      gap: 3.25rem;
      font-size: ${fontSize.xs};
      color: ${colors.gray};
      padding-left: 2.3125rem;
    `;
  }}
`;

const NavMenu = () => {
  return (
    <MenuContainer>
      <NavMenuButton content="HOME" type="HOME" link="/home" />
      <NavMenuButton content="CHAT" type="CHAT" link="/chat" />
      <NavMenuButton content="NOTIFICATION " type="NOTI" link="/notification" />
    </MenuContainer>
  );
};

export default NavMenu;
