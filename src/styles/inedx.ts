import { ButtonLayout } from '@/buttons/Button';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => {
    const { colors, fontSize } = theme;
    return css`
      padding-top: 4.87rem;
      background-color: ${colors.bgcolor};
      display: flex;
      align-items: center;
      justify-content: center;

      .textContainer {
        margin-left: 7rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h2 {
          color: ${colors.navy};
          font-size: ${fontSize.title};
          margin: 0;
        }

        p {
          color: ${colors.navy};
          font-size: ${fontSize.xl};
          padding: 1.25rem 0 3.5rem 0;
        }
      }
    `;
  }}
`;

export const LoginButton = styled(ButtonLayout)`
  ${({ theme }) => {
    const { fontSize } = theme;
    return css`
      border-radius: 0.625rem;
      padding: 1.25rem 6.875rem;
      font-size: ${fontSize.lg};
    `;
  }}
`;
