import AddSomethingModal from '@/molecules/addSomething/AddSomethingModal';
import FollowerList from '@/organisms/followerList/FollowerList';
import FollowerProfile from '@/organisms/followerProfile/FollowerProfile';
import NavBarLayout from '@/organisms/navBar/NavBarLayout';
import useInput from 'hooks/useInput';
import useModal from 'hooks/useModal';
import { NextPage } from 'next';
import { Container, Area } from 'styles/home';

const Home: NextPage = () => {
  const { isShown, openModal, closeModal } = useModal();
  const [value, onChangeValue, setValue] = useInput('');
  const [newMember, onChangeNewMember, setNewMember] = useInput('');
  return (
    <Container>
      <NavBarLayout>
        <Area>
          <FollowerList
            onClick={openModal}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              const { value } = event.target;
              onChangeValue;
              setValue(value);
            }}
            value={value}
          />
        </Area>
        <Area>
          <FollowerProfile />
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

export default Home;
