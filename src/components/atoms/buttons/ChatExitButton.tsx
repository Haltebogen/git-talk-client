import { ButtonProps, ButtonLayout } from '@/buttons/Button';
import styled from 'styled-components';
import ChatExit from '@/icons/chat_exit.svg';

export const Btn = styled(ButtonLayout)`
  margin-bottom: 0.5475rem;
`;

export const ChatExitButton = ({ onClick }: ButtonProps) => {
  return (
    <Btn onClick={onClick} buttonType="circle">
      <ChatExit />
    </Btn>
  );
};

export default ChatExitButton;
