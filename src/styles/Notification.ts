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
        color: ${colors.gray};
        margin: 0;
      }
    `;
  }}
`;
export const Content = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 3.125rem;
`;

export const UserInfo = styled.div`
  ${({ theme }) => {
    const { colors, fontSize } = theme;
    return css`
      display: flex;
      align-items: center;
      padding-right: 6.5rem;

      span {
        padding: 0.625rem 0 0 0.625rem;
        font-size: ${fontSize.xxs};
        color: ${colors.gray};
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
  max-width: 31.25rem;
  padding-top: 0.625rem;
`;

export const Date = styled.div`
  width: 100%;
  max-width: 18.75rem;
  padding-top: 0.625rem;
`;
