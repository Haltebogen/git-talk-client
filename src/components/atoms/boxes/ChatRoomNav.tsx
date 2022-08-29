import styled, { css } from 'styled-components';
import ProfileImg from '@/icons/profile_img.svg';
import React, { useState } from 'react';
import { ButtonLayout, ButtonProps } from '@/buttons/Button';
import ChatFollow from '@/icons/chat_follow.svg';
import More from '@/icons/more.svg';
import ChatExit from '@/icons/chat_exit.svg';

export const Box = styled.div`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      max-width: 43.725rem;
      height: 10%;
      border-bottom: 0.125rem solid rgba(112, 124, 151, 0.1);
      background-color: ${colors.white};
      display: flex;
      gap: 2.375rem;
      .profileImg {
        margin-bottom: 2.225rem;
        margin-left: 0.875rem;
        transform: scale(0.2);
        width: 100%;
        max-width: 3.25rem;
      }
    `;
  }}
`;

export const ChatFollowButton = styled(ButtonLayout)``;

export const ChatExitButton = styled(ButtonLayout)`
  margin-bottom: 0.5475rem;
`;

export const MoreButton = styled(ButtonLayout)`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      box-shadow: 0.0875rem 0.0875rem rgba(0, 0, 0, 0.1);
      background-color: ${colors.white};
    `;
  }}
`;
const Middle = styled.div`
  ${({ theme }) => {
    const { colors, fontSize } = theme;
    return css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      gap: 0.3125rem;

      .name {
        font-size: ${fontSize.sm};
        font-size: 1.875rem;
      }

      .nickname {
        color: ${colors.lightgray};
        font-size: ${fontSize.md};
      }
    `;
  }}
`;

const Right = styled.div`
  display: flex;
  margin-right: 0.875rem;
`;

const ButtonDom = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
`;

const DropDownButton = styled.div<{ isVisible: boolean }>`
  display: flex;
  flex-direction: column;
  position: absolute;
  justify-content: space-between;
  top: 4.625rem;
  display: ${(props) => (props.isVisible ? 'block' : 'none')};
`;

const DropUpButton = styled.div``;

interface ChatRoomNavProps extends ButtonProps {
  name: string;
  profileImg: string | null;
  nickname: string;
}

const ChatRoomNav = ({ name, profileImg, nickname, onClick }: ChatRoomNavProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleVisible = () => {
    setIsVisible(!isVisible);
  };

  return (
    <Box>
      {profileImg ? (
        <div className="profileImg">{profileImg}</div>
      ) : (
        <div className="profileImg">
          <ProfileImg />
        </div>
      )}
      <Middle>
        <div className="nickname">{nickname}</div>
        <div className="name">{name}</div>
      </Middle>
      <Right>
        <ButtonDom className="dropDown">
          <DropUpButton>
            <MoreButton onClick={handleVisible} buttonType="circle" buttonRole="event">
              <More />
            </MoreButton>
          </DropUpButton>
          <DropDownButton isVisible={isVisible}>
            <ChatExitButton onClick={onClick} buttonType="circle" buttonRole="event">
              <ChatExit />
            </ChatExitButton>
            <ChatFollowButton onClick={onClick} buttonType="circle" buttonRole="event">
              <ChatFollow />
            </ChatFollowButton>
          </DropDownButton>
        </ButtonDom>
      </Right>
    </Box>
  );
};

export default ChatRoomNav;
