import { ButtonProps, ButtonLayout } from '@/buttons/Button';
import styled from 'styled-components';
import ChatFollow from '@/icons/chat_follow.svg';

export const Btn = styled(ButtonLayout)`
  box-shadow: 0.0875rem 0.0875rem rgba(0, 0, 0, 0.1);
  margin-top: 0.625rem;
`;

export const ChatFollowButton = ({ onClick }: ButtonProps) => {
  return (
    <Btn onClick={onClick} buttonType="circle">
      <ChatFollow />
    </Btn>
  );
};

export default ChatFollowButton;
