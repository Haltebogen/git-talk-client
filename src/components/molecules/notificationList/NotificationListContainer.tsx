import { BoxLayout } from '@/boxes/Box';
import styled, { css } from 'styled-components';

const NotificationBox = styled(BoxLayout)`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      border-radius: 0.375rem;
      border: none;
      background-color: ${colors.secondary};
      display: flex;
      width: 100%;
      gap: 1.3125rem;
      align-items: center;
      max-height: 6.25rem;
    `;
  }}
`;

type NotificationType = 'FOLLOW' | 'SERVICE_JOIN' | 'CHAT_MESSAGE' | 'CHAT_JOIN';

interface NotificationListContainerProps {
  title: string;
  message: string;
  link: string;
  isRead: boolean;
  notificationType: NotificationType;
  isSendPushNotification: boolean;
  sender?: string;
  receiver?: string;
}

const NotificationListContainer = ({ title, message, link, isRead, notificationType, isSendPushNotification }: NotificationListContainerProps) => {
  return (
    <NotificationBox boxType="list">
      {notificationType}
      {title}
      {message}
      {link}
      {isRead}
      {isSendPushNotification}
    </NotificationBox>
  );
};

export default NotificationListContainer;
