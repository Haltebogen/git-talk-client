import { Button, AddButtonProps } from './AddButton';
import styled from 'styled-components';
import ChatExit from '@/icons/chat_exit.svg';

export const Btn = styled(Button)`
  box-shadow: 0.0875rem 0.0875rem rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.625rem;
`;

export const ChatExitButton = ({ onClick }: AddButtonProps) => {
  return (
    <Btn onClick={onClick}>
      <ChatExit />
    </Btn>
  );
};

export default ChatExitButton;
