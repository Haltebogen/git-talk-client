import { BoxLayout } from '@/boxes/Box';
import { ButtonLayout } from '@/buttons/Button';
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
      position: relative;
      display: flex;
      flex-direction: column;
      border-radius: 0.375rem;
      border: none;
      background-color: ${colors.secondary};
      display: flex;
      width: 100%;
      padding: 2.5rem;
      gap: 0.625rem;
    `;
  }}
`;

export const NotiTitle = styled.div`
  ${({ theme }) => {
    const { colors, fontSize } = theme;
    return css`
      position: absolute;
      top: 0.625rem;
      left: 1rem;
      color: ${colors.gray};
      font-size: ${fontSize.xxs};
    `;
  }}
`;

export const UserInfo = styled.div`
  ${({ theme }) => {
    const { colors, fontSize } = theme;
    return css`
      position: absolute;
      top: 3rem;
      left: 1.5rem;

      span {
        padding: 0.625rem 0 0 0.625rem;
        font-size: ${fontSize.xxs};
        color: ${colors.gray};
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
  padding-top: 10px;
`;

export const ProfileImage = styled(Image)`
  border-radius: 50%;
`;

export const NotiDetails = styled.div`
  ${({ theme }) => {
    const { colors, fontSize } = theme;
    return css`
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 31.25rem;
      padding-top: 0.625rem;
      color: ${colors.purple};
      font-size: ${fontSize.md};
      font-weight: 700;
    `;
  }}
`;
export const CloseButton = styled(ButtonLayout)`
  max-width: 0.625rem;
  position: absolute;
  opacity: 0.3;
  top: 1.25rem;
  right: 1.25rem;

  svg {
    position: absolute;
  }

  &:hover {
    opacity: 1;
  }
`;

export const AllowButton = styled(ButtonLayout)`
  position: absolute;
  top: 3.4rem;
  right: 3.125rem;
  max-width: 4.375rem;
`;
