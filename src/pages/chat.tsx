import ChatRoomContainer from '@/organisms/chatRoom';
import AddSomethingModal from '@/molecules/addSomething/AddSomethingModal';
import ChatList from '@/organisms/chatList';
import NavBarLayout from '@/organisms/navBar/NavBarLayout';
import useInput from 'hooks/useInput';
import useModal from 'hooks/useModal';
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next';
import { FormEvent, useCallback } from 'react';
import { Container, Area } from 'styles/chat';
import wrapper from 'store/configureStore';
import { initUser } from 'store/features/userSlice';

const Chat: NextPage = () => {
  const { isShown, openModal, closeModal } = useModal();
  const [value, onChangeValue, setValue] = useInput('');
  const [chat, onChangeChat, setChat] = useInput('');

  const onSubmit = useCallback((event: FormEvent) => {
    event.preventDefault();
  }, []);

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
          <ChatRoomContainer />
        </Area>
      </NavBarLayout>
      <AddSomethingModal
        value={chat}
        show={isShown}
        onSubmit={onSubmit}
        onCancelClick={() => setChat('')}
        onCloseModal={closeModal}
        placeholder="이메일 혹은 아이디를 입력하세요"
        onChange={(event) => {
          const { value } = event.target;
          onChangeChat;
          setChat(value);
        }}
      >
        결과
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
