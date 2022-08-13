import LOGOUT from '@/icons/logout.svg';
import Link from 'next/link';
import { MenuButton } from './ButtonStyles';

const LogoutButton = () => {
  return (
    <Link href="/">
      <MenuButton aria-label="로그아웃 하기">
        <LOGOUT />
        LOG OUT
      </MenuButton>
    </Link>
  );
};
export default LogoutButton;
