import AddSomethingModal from '@/molecules/addSomething/AddSomethingModal';
import ChatList from '@/organisms/chatList/ChatList';
import NavBarLayout from '@/organisms/navBar/NavBarLayout';
import useInput from 'hooks/useInput';
import useModal from 'hooks/useModal';
import { NextPage } from 'next';
import { FormEvent, useCallback } from 'react';
import { Container, Area } from 'styles/chat';

const Chat: NextPage = () => {
  const { isShown, openModal, closeModal } = useModal();
  const [value, onChangeValue, setValue] = useInput('');
  const [chat, onChangeChat, setChat] = useInput('');
  const object: [] = [];

  const onSubmit = useCallback((event: FormEvent) => {
    event.preventDefault();
  }, []);

  return (
    <Container>
      <NavBarLayout title="Git-Talk _ 채팅">
        <Area>
          <ChatList
            onClick={openModal}
            onChange={(event) => {
              const { value } = event.target;
              onChangeValue;
              setValue(value);
            }}
            value={value}
          />
        </Area>
      </NavBarLayout>
      <AddSomethingModal
      onResultClick={()=>console.log('click')}
        searchValue={object}
        value={chat}
        show={isShown}
        onSubmit={onSubmit}
        onCancelClick={() => onChangeChat('')}
        onCloseModal={closeModal}
        placeholder="이메일 혹은 아이디를 입력하세요"
        onChange={(event) => {
          console.log(event.target.value);
          const { value } = event.target;
          onChangeChat;
          setChat(value);
        }}
      />
    </Container>
  );
};

export default Chat;
