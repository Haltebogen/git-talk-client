import NotificationListContainer from '@/molecules/notificationList/NotificationListContainer';
import NavBarLayout from '@/organisms/navBar/NavBarLayout';
import { NextPage } from 'next';

const Notification: NextPage = () => {
  return (
    <div>
      <NavBarLayout>
        <NotificationListContainer />
      </NavBarLayout>
    </div>
  );
};

export default Notification;
