import styled from 'styled-components';
import React from 'react';
import ReactTextareaAutosize from 'react-textarea-autosize';
import Send from '@/icons/send.svg';
import { ContentInputProps } from '@/inputs/ContentInput';
import { ButtonLayout } from '@/buttons/Button';

export const ChatInputForm = styled.div`
  display: flex;
  align-items: center;
  vertical-align: middle;
  border-top: 0.125rem solid rgba(112, 124, 151, 0.1);
  max-width: 43.725rem;
  background-color: white;
  padding: 1rem;

  textarea {
    display: flex;
    align-items: center;
    justify-content: center;
    resize: none;
    width: 100%;
    max-height: 18.75rem;
    font-size: 1rem;
    border: none;
    outline: none;
    overflow-y: scroll;
    padding: 1.875rem;

    ::-webkit-scrollbar {
      display: none;
    }

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

interface ChatInputContainerProps extends ContentInputProps {
  onSubmit: (e: any) => void;
  setChat: (s: string) => void;
}

const ChatInputContainer = ({ value, onChange, setChat, onSubmit }: ChatInputContainerProps) => {
  const onPressEnter = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      onSubmit(event);
    } else if (event.key === 'Enter' && event.shiftKey) {
      setChat(value + '\n');
    }
  };

  return (
    <ChatInputForm>
      <ReactTextareaAutosize placeholder="메시지를 입력해주세요" value={value} onChange={onChange} onKeyDown={onPressEnter} />
      <ChatSendButton buttonType="circle" buttonRole="event">
        <Send />
      </ChatSendButton>
    </ChatInputForm>
  );
};

export default ChatInputContainer;
