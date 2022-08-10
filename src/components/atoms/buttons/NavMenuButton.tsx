import Home from '@/icons/home.svg';
import Chat from '@/icons/chat.svg';
import NOTI from '@/icons/bell.svg';
import Link from 'next/link';
import { MenuButton } from './ButtonStyles';

export interface NavMenuButtonProps {
  type: 'HOME' | 'CHAT' | 'NOTI';
  content: string;
  link: string;
  ariaLabel: string;
}

const NavMenuButton = ({ content, type, link, ariaLabel }: NavMenuButtonProps) => {
  return (
    <Link href={link}>
      <a>
        <MenuButton aria-label={ariaLabel}>
          {type === 'HOME' && <Home />}
          {type === 'CHAT' && <Chat />}
          {type === 'NOTI' && <NOTI />}
          {content}
        </MenuButton>
      </a>
    </Link>
  );
};
export default NavMenuButton;
