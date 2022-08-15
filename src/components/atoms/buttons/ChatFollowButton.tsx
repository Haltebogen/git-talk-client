import { ButtonProps, ButtonLayout } from '@/buttons/Button';
import styled from 'styled-components';
import ChatFollow from '@/icons/chat_follow.svg';

export const Btn = styled(ButtonLayout)`

export const ChatFollowButton = ({ onClick }: ButtonProps) => {
  return (
    <Btn onClick={onClick} buttonType="circle">
      <ChatFollow />
    </Btn>
  );
};

export default ChatFollowButton;
