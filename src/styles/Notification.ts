import { BoxLayout } from '@/boxes/Box';
import Image from 'next/image';
import styled, { css } from 'styled-components';

export const NotiContiner = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
  gap: 1rem;
  margin: 1.25rem;
`;

export const NotificationBox = styled(BoxLayout)`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      display: flex;
      flex-direction: column;
      border-radius: 0.375rem;
      border: none;
      background-color: ${colors.secondary};
      display: flex;
      width: 100%;
      padding: 1.875rem;
      gap: 0.625rem;

      h2 {
        margin: 0;
      }
    `;
  }}
`;

export const UserInfo = styled.div`
  ${({ theme }) => {
    const { colors, fontSize } = theme;
    return css`
      display: flex;
      align-items: center;

      span {
        padding-left: 0.625rem;
        font-size: ${fontSize.xxs};
        color: ${colors.gray};
        padding-top: 0.625rem;
      }
    `;
  }}
`;

export const ProfileImage = styled(Image)`
  border-radius: 50%;
`;

export const NotiDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  span {
    width: 100%;
    padding: 0;
  }
`;
