import styled, { css } from 'styled-components';

export const MenuButton = styled.div`
  ${({ theme }) => {
    const { colors, fontSize } = theme;
    return css`
      border: none;
      display: flex;
      gap: 1.375rem;
      width: 100%;
      align-items: center;
      color: ${colors.navy};
      font-size: ${fontSize.xs};

      &:hover {
        cursor: pointer;
        color: ${colors.purple};
      }
    `;
  }}
`;
