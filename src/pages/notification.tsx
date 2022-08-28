import NavBarLayout from '@/organisms/navBar/NavBarLayout';
import { NotiContiner, NotiDetails, NotificationBox, ProfileImage, UserInfo } from '@/styles/Notification';
import { NextPage } from 'next';
import useSWR from 'swr';
import fetcher from 'utils/api/main';

const Notification: NextPage = () => {
  const { data: noti } = useSWR(`/api/v1/notification`, fetcher);

  return (
    <NavBarLayout title="Git-Talk _ 알림">
      <NotiContiner>
        {noti?.data?.map((data: any, index: number) => (
          <NotificationBox key={index}>
            <h2>{data.title}</h2>
            <UserInfo>
              <ProfileImage src={data.receiver.profileImageUrl} alt="프로필 이미지" width={50} height={50} unoptimized={true} />
              <span>{data.receiver.nickName}</span>
            </UserInfo>
            <NotiDetails>
              <span>{data.message}</span>
              <span>{data.sender}</span>
              <span>{data.isRead}</span>
              <span>{data.receiver.createdAt}</span>
              <span>{data.receiver.isRemoved}</span>
            </NotiDetails>
          </NotificationBox>
        ))}
      </NotiContiner>
    </NavBarLayout>
  );
};

export default Notification;
