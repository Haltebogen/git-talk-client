import styled, { css } from 'styled-components';
export const Container = styled.div`
  ${({ theme }) => {
    const { colors, fontSize } = theme;
    return css`
      background-color: ${colors.bgcolor};
      display: flex;
      flex-direction: column;
      align-items: center;

      h2 {
        color: ${colors.navy};
        font-size: ${fontSize.title};
        margin: 0;
      }

      p {
        color: ${colors.navy};
        font-size: ${fontSize.xl};
        padding: 1.8125rem 0 3.5rem 0;
      }
    `;
  }}
`;
