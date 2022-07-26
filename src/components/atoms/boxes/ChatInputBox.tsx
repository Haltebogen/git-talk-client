import styled, { css } from 'styled-components';
// import Send from '@/icons/send.svg';
import { useRef, useState } from 'react';
import ChatSendButton from '@/buttons/ChatSendButton';
//완
export const Box = styled.div`
  ${({ theme }) => {
    const { colors, fontSize } = theme;
    return css`
      display: flex;
      padding-left: 3.375rem;
      padding-right: 3.375rem;
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

const ChatInputBox = () => {
  const [value, setValue] = useState('');
  console.log(value);
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <Box>
      <input
        placeholder="메시지를 입력해주세요."
        value={value}
        ref={inputRef}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <ChatSendButton onClick={() => console.log('send')} />
    </Box>
  );
};

export default ChatInputBox;
