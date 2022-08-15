import { ButtonLayout, ButtonProps } from '@/buttons/Button';
import styled from 'styled-components';
import Send from '@/icons/send.svg';

export const Btn = styled(ButtonLayout)`
  box-shadow: 0.0875rem 0.0875rem rgba(0, 0, 0, 0.1);
  width: auto;
`;

export const ChatSendButton = ({ onClick }: ButtonProps) => {
  return (
    <Btn onClick={onClick} buttonType="circle">
      <Send />
    </Btn>
  );
};

export default ChatSendButton;
