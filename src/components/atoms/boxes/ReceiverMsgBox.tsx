import styled, { css } from 'styled-components';
import React from 'react';
import { Container, Space, Box, MsgBoxProps } from './SenderMsgBox';
//완
const ReceiverBox = styled(Box)`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      background-color: ${colors.primary};
      color: ${colors.white};
      border: 0.0625rem solid ${colors.primary};
      border-radius: 0rem 0.625rem 0.625rem 0.625rem;
    `;
  }}
`;

const ReceiverMsgBox = ({ message }: MsgBoxProps) => {
  return (
    <Container>
      <ReceiverBox>{message}</ReceiverBox>
      <Space />
    </Container>
  );
};

export default ReceiverMsgBox;
