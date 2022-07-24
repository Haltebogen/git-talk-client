import styled, { css } from 'styled-components';
import React from 'react';
//완
export const Box = styled.div`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      background-color: ${colors.white};
      color: ${colors.navy};
      display: flex;
      padding: 1.25rem 1.5rem;
      border: 0.0625rem solid rgba(112, 124, 151, 0.25);
      box-shadow: 0.125rem 0.125rem rgba(112, 124, 151, 0.25);
      border-radius: 0.625rem 0.625rem 0rem 0.625rem;
      max-width: 32.5rem;
      word-break: break-all;
    `;
  }}
`;
export const Container = styled.div`
  display: flex;
  width: 43.75rem;
  justify-content: space-between;
`;

export const Space = styled.div`
  min-width: 6.25rem;
`;

export interface MsgBoxProps {
  message: string;
}

const SenderMsgBox = ({ message }: MsgBoxProps) => {
  return (
    <Container>
      <Space />
      <Box>{message}</Box>
    </Container>
  );
};

export default SenderMsgBox;
