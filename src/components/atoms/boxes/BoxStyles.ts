import styled, { css } from 'styled-components';

export const ListBox = styled.div`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      border-radius: 0.375rem;
      max-width: 36.25rem;
      max-height: 5.875rem;
      background-color: ${colors.secondary};
      display: flex;
      width: 100%;
      gap: 1.3125rem;
      align-items: center;

      &:hover {
        background-color: ${colors.hover};
        color: ${colors.white};
        cursor: pointer;
      }

      &:active {
        background-color: ${colors.clickbox};
      }

      .profileImg {
        padding: 1.25rem 0 1.25rem 2.1875rem;
        transform: scale(0.2);
        width: 100%;
        max-width: 3.25rem;

        svg {
          padding-left: 2.8125rem;
        }
      }
    `;
  }}
`;
