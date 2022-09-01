import styled, { css } from 'styled-components';
import React from 'react';
import ReactTextareaAutosize from 'react-textarea-autosize';
import Send from '@/icons/send.svg';
import { ButtonLayout, ButtonProps } from '@/buttons/Button';

interface ChatInputBoxProps extends ButtonProps {
  onSubmit: (e: any) => void;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  value?: string;
}

export const Box = styled.div`
  ${({ theme }) => {
    const { colors, fontSize } = theme;
    return css`
      display: flex;
      padding-left: 2.875rem;
      padding-right: 2.875rem;
      align-items: center;
      border-top: 0.125rem solid rgba(112, 124, 151, 0.1);
      background-color: ${colors.secondary};
      max-width: 43.725rem;

      input {
        border: none;
        padding: 1.375rem 0 1.375rem 0.625rem;
        outline: none;
        width: 90%;

        ::placeholder {
          color: ${colors.navy};
          font-size: ${fontSize.sm};
        }
      }
    `;
  }}
`;

export const ChatMsgForm = styled.form`
  display: flex;
  align-items: center;
  vertical-align: middle;
  width: 100%;

  textarea {
    display: flex;
    align-items: center;
    justify-content: center;
    resize: none;
    width: 100%;
    max-width: 64rem;
    max-height: 18.75rem;
    font-size: 1rem;
    border: none;
    border-radius: 0.9375rem;
    outline: none;
    overflow-y: auto;
    padding: 1.875rem;

    &:focus {
      border: solid 0.0625rem var(--border-focus);
    }

    .placeholder {
      text-align: center;
    }
  }
`;

export const ChatSendButton = styled(ButtonLayout)`
  box-shadow: 0.0875rem 0.0875rem rgba(0, 0, 0, 0.1);
  width: auto;
`;

const ChatInputBox = ({ onSubmit, onChange, value }: ChatInputBoxProps) => {
  const onPressEnter = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      onSubmit(event);
    }
  };

  return (
    <Box>
      <ChatMsgForm onSubmit={onSubmit}>
        <ReactTextareaAutosize placeholder="메시지를 입력해주세요" value={value} onChange={onChange} onKeyDown={onPressEnter} />
        <ChatSendButton onClick={onSubmit} buttonType="circle" buttonRole="event">
          <Send />
        </ChatSendButton>
      </ChatMsgForm>
    </Box>
  );
};

export default ChatInputBox;