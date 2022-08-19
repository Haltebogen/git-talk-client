import { Container, RedirectButton } from '@/styles/non-login';
import { NextPage } from 'next';
import Link from 'next/link';

const NonLogin: NextPage = () => {
  return (
    <Container>
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
