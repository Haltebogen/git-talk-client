import React from 'react';
import styled, { css } from 'styled-components';

export const Box = styled.div`
  display: flex;
  padding: 1.25rem 1.5rem;
  box-shadow: 0.125rem 0.125rem rgba(112, 124, 151, 0.25);
  word-break: break-all;
`;

export const SenderMsgBox = styled(Box)`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      background-color: ${colors.white};
      max-width: 29.375rem;
      color: ${colors.navy};
      border: 0.0625rem solid rgba(112, 124, 151, 0.25);
      border-radius: 0.625rem 0.625rem 0rem 0.625rem;
    `;
  }}
`;

export const ReceiverMsgBox = styled(Box)`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      max-width: 29.375rem;
      background-color: ${colors.primary};
      color: ${colors.white};
      border: 0.0625rem solid ${colors.primary};
      border-radius: 0rem 0.625rem 0.625rem 0.625rem;
    `;
  }}
`;

export interface MsgBoxProps {
  isMe: boolean;
  message: string;
}

const MsgBox = ({ isMe, message }: MsgBoxProps) => {
  return <>{isMe ? <SenderMsgBox>{message}</SenderMsgBox> : <ReceiverMsgBox>{message}</ReceiverMsgBox>}</>;
};

export default MsgBox;
