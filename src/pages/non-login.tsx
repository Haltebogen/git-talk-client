import { Container, RedirectButton } from '@/styles/non-login';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const NonLogin: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Git-Talk _ 로그인 실패</title>
      </Head>
      <h2>로그인을 다시 시도해주세요.</h2>
      <Link href="/">
        <a>
          <RedirectButton buttonType="primary" buttonRole="link">
            로그인 하기
          </RedirectButton>
        </a>
      </Link>
    </Container>
  );
};

export default NonLogin;
