import styled, { css } from 'styled-components';
import NavProfile from '@/icons/nav_profile_img.svg';
import More from '@/icons/more.svg';
import React from 'react';

export const Box = styled.div`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      max-width: 53.125rem;
      height: 10%;
      border-bottom: 0.125rem solid rgba(112, 124, 151, 0.1);
      background-color: ${colors.white};
      display: flex;
      /* position: fixed;
      top: 0;
      left: 0;
      right: 0; */
      .profileImg {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1.625rem 1.625rem 1.625rem 2.1875rem;
      }
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
  align-items: center;
  justify-content: center;
`;

export interface ChatRoomNavProps {
  name: string;
  profileImg: string | null;
  nickname: string;
}

const ChatRoomNav = ({ name, profileImg, nickname }: ChatRoomNavProps) => {
  return (
    <Box>
      {profileImg ? (
        <div className="profileImg">{profileImg}</div>
      ) : (
        <div className="profileImg">
          <NavProfile />
        </div>
      )}
      <Middle>
        <div className="nickname">{nickname}</div>
        <div className="name">{name}</div>
      </Middle>
      <Right>
        <More className="moreBtn" />
      </Right>
    </Box>
  );
};

export default ChatRoomNav;
