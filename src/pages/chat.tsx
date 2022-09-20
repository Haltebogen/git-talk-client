import ChatRoom from '@/organisms/chatRoom';
import AddSomethingModal from '@/molecules/addSomething/AddSomethingModal';
import ChatList from '@/organisms/chatList';
import NavBarLayout from '@/organisms/navBar/NavBarLayout';
import useInput from 'hooks/useInput';
import useModal from 'hooks/useModal';
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next';
import { useState } from 'react';
import { Container, Area } from 'styles/chat';
import wrapper from 'store/configureStore';
import { initUser } from 'store/features/userSlice';
import SearchResult from '@/molecules/search/SearchResult';
import useSearch from 'hooks/useSearch';
import subInstance from 'utils/api/sub';

const Chat: NextPage = () => {
  const { isShown, openModal, closeModal } = useModal();
  const [value, onChangeValue, setValue] = useInput('');
  const [follower, onChangeFollower, setFollower] = useInput('');
  const { searchResult } = useSearch(undefined, true);
  const [followerId, setFollowerId] = useState<number>(0);

  return (
    <Container>
      <NavBarLayout title="Git-Talk _ 채팅">
        <Area>
          <ChatList
            onClick={openModal}
            onChange={(event: any) => {
              const { value } = event.target;
              onChangeValue;
              setValue(value);
            }}
            value={value}
          />
        </Area>
        <Area>
          <ChatRoom />
        </Area>
      </NavBarLayout>
      <AddSomethingModal
        value={follower}
        show={isShown}
        onSubmit={(event) => {
          event.preventDefault();
          subInstance.createChatRoom(followerId, ''); //roomname
          setFollower('');
          setFollowerId(0);
        }}
        onCancelClick={() => setFollower('')}
        onCloseModal={() => {
          closeModal();
          setFollower('');
        }}
        placeholder="이메일 혹은 아이디를 입력하세요"
        onChange={(event) => {
          const { value } = event.target;
          onChangeFollower;
          setFollower(value);
        }}
      >
        <SearchResult>
          {searchResult?.map((data: any) => (
            <li
              key={data.providerId}
              onClick={() => {
                setFollower(data.nickName);
                setFollowerId(data.providerId);
              }}
            >
              <span>{data.nickName}</span>
            </li>
          ))}
        </SearchResult>
      </AddSomethingModal>
    </Container>
  );
};

export default Chat;

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(() => async (context: GetServerSidePropsContext) => {
  initUser(context);
  await initUser(context);

  return { props: {} };
});
