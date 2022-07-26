import { Button, AddButtonProps } from './AddButton';
import styled from 'styled-components';
import Send from '@/icons/send.svg';

export const Btn = styled(Button)`
  box-shadow: 0.0875rem 0.0875rem rgba(0, 0, 0, 0.1);
`;

export const ChatSendButton = ({ onClick }: AddButtonProps) => {
  return (
    <Btn onClick={onClick}>
      <Send />
    </Btn>
  );
};

export default ChatSendButton;
