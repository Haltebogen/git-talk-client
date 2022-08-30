import Button from '@/buttons/Button';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      display: flex;
      width: 100vw;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-top: 21.875rem;

      h2 {
        display: flex;
        justify-content: center;
        color: ${colors.purple};
      }
    `;
  }}
`;

export const RedirectButton = styled(Button)`
  ${({ theme }) => {
    const { fontSize } = theme;
    return css`
      padding: 1rem 1.7rem;
      border-radius: 0.25rem;
      font-size: ${fontSize.md};
    `;
  }}
`;
