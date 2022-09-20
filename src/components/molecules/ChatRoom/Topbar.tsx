import { ButtonLayout, ButtonProps } from '@/buttons/Button';
import styled, { css } from 'styled-components';
import ProfileImg from '@/icons/profile_img.svg';
import ChatFollow from '@/icons/chat_follow.svg';
import More from '@/icons/more.svg';
import ChatExit from '@/icons/chat_exit.svg';
import { MouseEventHandler } from 'react';

const Container = styled.div`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
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

const Right = styled.div`
  display: flex;
  margin-right: 0.875rem;
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

const DropDownButton = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
`;

const IconButton = styled(ButtonLayout)`
  max-width: 2.9375rem;
`;

export const MoreButton = styled(IconButton)`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      background-color: ${colors.white};
    `;
  }}
`;

const HideButton = styled.div<{ isVisible: boolean }>`
  display: flex;
  flex-direction: column;
  position: absolute;
  justify-content: space-between;
  top: 4.625rem;
  display: ${(props) => (props.isVisible ? 'block' : 'none')};
`;

interface TopbarProps extends ButtonProps {
  name: string;
  profileImg: string | null;
  nickname: string;
  isVisible: boolean;
  onSpread: MouseEventHandler<HTMLButtonElement>;
}

const Topbar = ({ name, profileImg, nickname, onClick, isVisible, onSpread }: TopbarProps) => {
  return (
    <Container>
      {profileImg ? (
        <div className="profileImg">{profileImg}</div>
      ) : (
        <div className="profileImg">
          <ProfileImg />
        </div>
      )}
      <Middle>
        <span className="nickname">{nickname}</span>
        <span className="name">{name}</span>
      </Middle>
      <Right>
        <DropDownButton>
          <MoreButton onClick={onSpread} buttonType="circle" buttonRole="event">
            <More />
          </MoreButton>
          <HideButton isVisible={isVisible}>
            <IconButton onClick={onClick} buttonType="circle" buttonRole="event">
              <ChatExit />
            </IconButton>
            <IconButton onClick={onClick} buttonType="circle" buttonRole="event">
              <ChatFollow />
            </IconButton>
          </HideButton>
        </DropDownButton>
      </Right>
    </Container>
  );
};

export default Topbar;
