import ChatRoomContainer from '@/organisms/ChatRoom/ChatRoomContainer';
import AddSomethingModal from '@/molecules/addSomething/AddSomethingModal';
<<<<<<< HEAD
=======
import ChatList from '@/organisms/ChatList/ChatList';
import NavBarLayout from '@/organisms/NavBar/NavBarLayout';
>>>>>>> f302a1a15d172afcfac865ce1acd3cf447de969a
import useInput from 'hooks/useInput';
import useModal from 'hooks/useModal';
import ChatRoomContainer from '@/organisms/chatRoom/ChatRoomContainer';
import ChatList from '@/organisms/chatList/ChatList';
import NavBarLayout from '@/organisms/navBar/NavBarLayout';
import { NextPage } from 'next';
import { Container, Area } from 'styles/chat';

const Chat: NextPage = () => {
  const { isShown, openModal, closeModal } = useModal();
  const [value, onChangeValue, setValue] = useInput('');
  const [newMember, onChangeNewMember, setNewMember] = useInput('');

  return (
    <Container>
      <NavBarLayout>
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
        show={isShown}
        onClick={() => setNewMember('')}
        onCloseModal={closeModal}
        onSubmit={(event) => {
          event.preventDefault();
        }}
        placeholder="이메일 혹은 아이디를 입력하세요"
        onChange={(event) => {
          const { value } = event.target;
          onChangeNewMember;
          setNewMember(value);
        }}
        value={newMember}
      />
    </Container>
  );
};

export default Chat;
