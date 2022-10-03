import HomeLogo from '@/logos/HomeLogo';
import type { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next';
import { Container, LoginButton, TextContainer } from '@/styles/index';
import Head from 'next/head';
import { initUser } from 'store/features/userSlice';
import wrapper from 'store/configureStore';

const Login: NextPage = () => {
  const loginUrl = `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_ID}&redirect_uri=${process.env.NEXT_PUBLIC_CLIENT_URL}/api/auth/github/callback`;

  return (
    <Container>
      <Head>
        <title>Git-Talk</title>
      </Head>
      <HomeLogo />
      <TextContainer>
        <h2>GIT TALK</h2>
        <p>GITHUB 유저들과 채팅할 수 있는 공간</p>
        <a href={loginUrl} role="button" aria-label="깃허브 로그인하기">
          <LoginButton buttonType="primary" buttonRole="link">
            GITHUB 로그인
          </LoginButton>
        </a>
      </TextContainer>
    </Container>
  );
};

export default Login;
