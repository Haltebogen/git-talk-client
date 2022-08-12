import HomeLogo from '@/logos/HomeLogo';
import type { NextPage } from 'next';
import { Container, LoginButton } from 'styles/inedx';

const Login: NextPage = () => {
  const loginUrl = `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_ID}&redirect_uri=${process.env.NEXT_PUBLIC_CLIENT_URL}/api/auth/github/callback`;

  return (
    <Container>
      <HomeLogo />
      <div className="textContainer">
        <h2>GIT TALK</h2>
        <p>GITHUB 유저들과 채팅할 수 있는 공간</p>
        <a href={loginUrl}>
          <LoginButton buttonType="primary" ariaLabel="로그인 하기">
            GITHUB 로그인
          </LoginButton>
        </a>
      </div>
    </Container>
  );
};

export default Login;
