import styled, { css } from 'styled-components';
import { ContentInputProps, Textarea } from '@/inputs/ContentInput';
import { ButtonLayout } from '@/buttons/Button';
import Send from '@/icons/send.svg';
import { FormEvent } from 'react';

const SendChatForm = styled.form`
  display: flex;
  align-items: center;
  vertical-align: middle;
  width: 100%;
`;

const MessageInput = styled(Textarea)`
  ${({ theme }) => {
    const { fontSize } = theme;
    return css`
      display: flex;
      align-items: center;
      justify-content: center;
      resize: none;
      max-height: 18.75rem;
      max-width: 34.375rem;
      font-size: ${fontSize.xs};
      border: none;
      overflow-y: auto;
      padding: 1.25rem;
      margin: 1.5625rem;

      .placeholder {
        text-align: center;
      }
    `;
  }}
`;

const SendButton = styled(ButtonLayout)`
  max-width: 2.9375rem;
`;

interface SendFormPRops extends ContentInputProps {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const SendForm = ({ value, onChange, onKeyDown, onSubmit }: SendFormPRops) => {
  return (
    <SendChatForm onSubmit={onSubmit}>
      <MessageInput placeholder="메시지를 입력해주세요" value={value} onChange={onChange} onKeyDown={onKeyDown}></MessageInput>
      <SendButton buttonType="circle" buttonRole="event">
        <Send />
      </SendButton>
    </SendChatForm>
  );
};

export default SendForm;
