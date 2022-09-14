import NavBarLayout from '@/organisms/navBar/NavBarLayout';
import { AllowButton, CloseButton, Content, NotiContiner, NotiDetails, NotificationBox, NotiTitle, ProfileImage, UserInfo } from '@/styles/Notification';
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next';
import Close from '@/icons/close.svg';
import useSWR from 'swr';
import fetcher from 'utils/api/main';
import subInstance from 'utils/api/sub';
import { initUser } from 'store/features/userSlice';
import wrapper from 'store/configureStore';

const FOLLOW_REQUEST = 'FOLLOW_REQUEST';

const Notification: NextPage = () => {
  const { data: noti } = useSWR(`/api/v1/notification`, fetcher);

  return (
    <NavBarLayout title="Git-Talk _ 알림">
      <NotiContiner>
        {noti?.data?.map((data: any, index: number) => (
          <NotificationBox key={index} boxType="background">
            <Content>
              <NotiTitle>{data.title}</NotiTitle>
              <UserInfo>
                <ProfileImage src={data.sender.profileImageUrl} alt="프로필 이미지" width={50} height={50} unoptimized={true} />
                <span>{data.sender.nickName}</span>
              </UserInfo>
              <NotiDetails>
                <span>{data.message}</span>
              </NotiDetails>
              <span>{data.receiver.isRemoved}</span>
              <CloseButton buttonType="clear">
                <Close />
              </CloseButton>
              {data.notificationType === FOLLOW_REQUEST && (
                <AllowButton
                  onClick={() => {
                    subInstance.allowFollow(data.sender.id);
                  }}
                  buttonRole="event"
                  ariaLabel="팔로잉 수락하기"
                  buttonType="primary"
                >
                  수락
                </AllowButton>
              )}
            </Content>
          </NotificationBox>
        ))}
      </NotiContiner>
    </NavBarLayout>
  );
};

export default Notification;

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps((store) => async (context: GetServerSidePropsContext) => {
  initUser(store, context);
  await initUser(store, context);
  return { props: {} };
});
