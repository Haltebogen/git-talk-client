import styled, { css } from 'styled-components';
import HomeLogo from '../../../assets/icons/home.svg';

const BtnWrapper = styled.div`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      background-color: ${colors.white};
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      &:hover {
        cursor: pointer;
      }
    `;
  }}
`;

const IconWrapper = styled.div`
  ${({ theme }) => {
    const { colors, fontSize } = theme;
    return css`
      color: ${colors.navy};
      width: ${fontSize.lg};
      height: ${fontSize.lg};
      &:hover {
        color: ${colors.purple};
      }
    `;
  }}
`;

const MenuText = styled.div`
  ${({ theme }) => {
    const { colors, fontSize } = theme;
    return css`
      color: ${colors.navy};
      font-weight: bold;
      text-decoration: none;
      border: none;
      padding-left: 1.25rem;
      font-size: ${fontSize.sm};
      a {
        color: ${colors.white};
      }
    `;
  }}
`;

const MenuButton = () => {
  return (
    <BtnWrapper>
      <IconWrapper>
        <HomeLogo />
      </IconWrapper>
      <MenuText>HOME</MenuText>
    </BtnWrapper>
  );
};

export default MenuButton;
