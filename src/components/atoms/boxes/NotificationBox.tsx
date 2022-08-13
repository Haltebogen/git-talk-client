import styled, { css } from 'styled-components';

export const Box = styled.div`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      border-radius: 0.375rem;
      background-color: ${colors.secondary};
      display: flex;
      width: 100%;
      gap: 1.3125rem;
      align-items: center;
      max-height: 6.25rem;

      &:hover {
        background-color: ${colors.hover};
        color: ${colors.white};
        cursor: pointer;
      }

      &:active {
        background-color: ${colors.clickbox};
      }
    `;
  }}
`;

const NotificationBox = () => {
  return <Box>알림사항</Box>;
};

export default NotificationBox;
