import { Button, AddButtonProps } from './AddButton';
import styled from 'styled-components';
import ChatFollow from '@/icons/chat_follow.svg';

export const Btn = styled(Button)`
  box-shadow: 0.0875rem 0.0875rem rgba(0, 0, 0, 0.1);
  margin-top: 0.625rem;
`;

export const ChatFollowButton = ({ onClick }: AddButtonProps) => {
  return (
    <Btn onClick={onClick}>
      <ChatFollow />
    </Btn>
  );
};

export default ChatFollowButton;
