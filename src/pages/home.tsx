import AddSomethingModal from '@/molecules/addSomething/AddSomethingModal';
import SearchResult from '@/molecules/search/SearchResult';
import FollowerList from '@/organisms/followerList/FollowerList';
import FollowerProfile from '@/organisms/followerProfile/FollowerProfile';
import NavBarLayout from '@/organisms/navBar/NavBarLayout';
import useInput from 'hooks/useInput';
import useModal from 'hooks/useModal';
import useSearch from 'hooks/useSearch';
import { GetServerSideProps, NextPage } from 'next';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { State } from 'store/configureStore';
import { Container, Area } from 'styles/home';
import { Imember } from 'type';
import subInstance from 'utils/api/sub';

const Home: NextPage = () => {
  const { isShown, openModal, closeModal } = useModal();
  const [value, onChangeValue, setValue] = useInput('');
  const [newMember, onChangeNewMember, setNewMember] = useInput('');
  const { searchResult } = useSearch(newMember, false);
  const [memberId, setMemberId] = useState<number>(0);
  const { name } = useSelector<State, Imember>((state) => state.member);
  console.log(searchResult);
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
          subInstance.createFollow(memberId);
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {
    req: { cookies },
  } = context;

  const isLogin = cookies['access_token'];

  if (!isLogin) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: { cookies },
  };
};
