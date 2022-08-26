import NotificationListContainer from '@/molecules/notificationList/NotificationListContainer';
import NavBarLayout from '@/organisms/navBar/NavBarLayout';
import { NextPage } from 'next';

const Notification: NextPage = () => {
  return (
    <div>
      <NavBarLayout title="Git-Talk _ 알림">
        <NotificationListContainer
          title="following"
          message="notification"
          sender=""
          receiver=""
          isRead={true}
          notificationType="FOLLOW"
          isSendPushNotification={false}
        />
      </NavBarLayout>
    </div>
  );
};

export default Notification;
