import AddSomethingModal from '@/molecules/addSomething/AddSomethingModal';
import SearchResult from '@/molecules/search/SearchResult';
import FollowerList from '@/organisms/followerList';
import FollowerProfile from '@/organisms/followerProfile';
import NavBarLayout from '@/organisms/navBar/NavBarLayout';
import useInput from 'hooks/useInput';
import useModal from 'hooks/useModal';
import useSearch from 'hooks/useSearch';
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import wrapper, { State } from 'store/configureStore';
import { MemberState } from 'store/features/memberSlice';
import { initUser } from 'store/features/userSlice';
import { Container, Area } from 'styles/home';
import mainInstance from 'utils/api/main';

const Home: NextPage = () => {
  const { isShown, openModal, closeModal } = useModal();
  const [value, onChangeValue, setValue] = useInput('');
  const [newMember, onChangeNewMember, setNewMember] = useInput('');
  const { searchResult } = useSearch(newMember, false);
  const [memberId, setMemberId] = useState<number>(0);
  const { name } = useSelector<State, MemberState>((state) => state.member);

  return (
    <Container>
      <NavBarLayout title="Git-Talk _ 홈">
        <Area>
          <FollowerList
            openModal={openModal}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              const { value } = event.target;
              onChangeValue;
              setValue(value);
            }}
            value={value}
          />
        </Area>
        <Area>{name && <FollowerProfile />}</Area>
      </NavBarLayout>
      <AddSomethingModal
        show={isShown}
        onCloseModal={() => {
          closeModal();
          setNewMember('');
        }}
        onSubmit={(event) => {
          event.preventDefault();
          mainInstance.createFollow(memberId);
          setNewMember('');
          setMemberId(0);
        }}
        placeholder="이메일 혹은 아이디를 입력하세요"
        onChange={(event) => {
          const { value } = event.target;
          onChangeNewMember;
          setNewMember(value);
        }}
        value={newMember}
        onCancelClick={() => setNewMember('')}
      >
        <SearchResult>
          {searchResult?.map((data: any) => (
            <li
              key={data.providerId}
              onClick={() => {
                setNewMember(data.nickName);
                setMemberId(data.providerId);
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

export default Home;

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(() => async (context: GetServerSidePropsContext) => {
  initUser(context);
  await initUser(context);
  return { props: {} };
});
