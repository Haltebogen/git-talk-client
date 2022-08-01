import Link from 'next/link';
import styled, { css } from 'styled-components';

export const Button = styled.button`
  ${({ theme }) => {
    const { colors, fontSize } = theme;
    return css`
      border-radius: 0.625rem;
      padding: 0.3125rem 0;
      max-width: 14rem;
      background-color: ${colors.primary};
      display: flex;
      width: 100%;
      justify-content: center;
      font-size: ${fontSize.xxs};
      border: none;

      a {
        color: ${colors.white};
      }

      &:hover {
        cursor: pointer;
      }

      &:active {
        background-color: ${colors.clickbtn};
      }
    `;
  }}
`;

const NavEditProfileButton = () => {
  return (
    <Link href="/edit-profile">
      <Button>
        <a>Edit profile</a>
      </Button>
    </Link>
  );
};
export default NavEditProfileButton;
