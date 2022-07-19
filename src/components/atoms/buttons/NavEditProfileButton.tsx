import Link from 'next/link';
import styled, { css } from 'styled-components';

export const Button = styled.div`
  ${({ theme }) => {
    const { colors, fontSize } = theme;
    return css`
      border-radius: 0.625rem;
      max-width: 14rem;
      padding: 0.3125rem 4.625rem;
      background-color: ${colors.primary};
      display: flex;
      width: 100%;
      align-items: center;
      color: ${colors.white};
      font-size: ${fontSize.xxs};

      &:hover {
        cursor: pointer;
      }

      a {
        color: ${colors.white};
      }
    `;
  }}
`;

const NavEditProfileButton = () => {
  return (
    <Button>
      <Link href="/edit-profile">Edit profile</Link>
    </Button>
  );
};
export default NavEditProfileButton;
