import AddSomethingModal from '@/molecules/addSomething/AddSomethingModal';
import useInput from 'hooks/useInput';
import useModal from 'hooks/useModal';
import ChatRoomContainer from '@/organisms/ChatRoom/ChatRoomContainer';
import ChatList from '@/organisms/ChatList/ChatList';
import NavBarLayout from '@/organisms/NavBar/NavBarLayout';
import { NextPage } from 'next';
import { Container, Area } from 'styles/chat';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
`;

export const Area = styled.div`
  display: flex;
  flex-grow: 1;
  width: 100%;
  justify-content: center;
  margin-top: 5.625rem;
`;

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
            onChange={(event) => {
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
