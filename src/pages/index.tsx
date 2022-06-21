import BasicButton from '@/buttons/BasicButton';
import Mainlogo from '@/icons/mainlogo.svg';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div>
      <Mainlogo />
      <h2>GIT TALK</h2>
      <p>GITHUB 유저들과 채팅할 수 있는 공간</p>
      <BasicButton ariaLabel="login">GITHUB 로그인</BasicButton>
    </div>
  );
};

export default Home;
