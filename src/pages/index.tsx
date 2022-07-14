import LoginButton from '@/buttons/LoginButton';
import HomeLogo from '@/logos/HomeLogo';
import type { NextPage } from 'next';
import { Container } from 'styles/inedx';
const Login: NextPage = () => {
  return (
    <Container>
      <HomeLogo />
      <div className="textContainer">
        <h2>GIT TALK</h2>
        <p>GITHUB 유저들과 채팅할 수 있는 공간</p>
        <LoginButton />
      </div>
    </Container>
  );
};

export default Login;
