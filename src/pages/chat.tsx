import AddSomethingModal from '@/molecules/addSomething/AddSomethingModal';
import ChatList from '@/organisms/chatList/ChatList';
import NavBarLayout from '@/organisms/navBar/NavBarLayout';
import useInput from 'hooks/useInput';
import useModal from 'hooks/useModal';
import { NextPage } from 'next';
import { Container, Area } from 'styles/chat';

const Chat: NextPage = () => {
  const { isShown, openModal, closeModal } = useModal();
  const [value, onChangeValue, setValue] = useInput('');
  const [newMember, onChangeNewMember, setNewMember] = useInput('');

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
