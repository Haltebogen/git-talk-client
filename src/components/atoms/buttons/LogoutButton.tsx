import LOGOUT from '@/icons/logout.svg';
import Link from 'next/link';
import { MenuButton } from './ButtonStyles';

const LogoutButton = () => {
  return (
    <Link href="/">
      <MenuButton>
        <LOGOUT />
        LOG OUT
      </MenuButton>
    </Link>
  );
};
export default LogoutButton;
