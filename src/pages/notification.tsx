import NotificationListContainer from '@/molecules/notificationList/NotificationListContainer';
import NavBarLayout from '@/organisms/navBar/NavBarLayout';
import { NextPage } from 'next';

const Notification: NextPage = () => {
  return (
    <div>
      <NavBarLayout>
        <NotificationListContainer
          title="following"
          message="notification"
          link="https://github.com/Haltebogen"
          isRead={true}
          notificationType="FOLLOW"
          isSendPushNotification={false}
        />
      </NavBarLayout>
    </div>
  );
};

export default Notification;
