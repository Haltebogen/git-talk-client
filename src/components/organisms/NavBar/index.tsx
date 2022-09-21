import NavMenu from '@/molecules/navBar/NavMenu';
import ProfileDetail from '@/contents/ProfileDetail';
import ProfileMain from '@/contents/ProfileMain';
import styled, { css } from 'styled-components';
import Button from '@/buttons/Button';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { UserState, logout, setUser } from 'store/features/userSlice';
import { useEffect, useState } from 'react';
import { removeCookieToken } from 'utils/storage/authCookie';
import mainInstance from 'utils/api/main';
import { User } from 'type';
import { State } from 'store/configureStore';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10rem;
  width: 100%;
  max-width: 18.125rem;
  padding-top: 3.25rem;
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.0625rem;
  align-items: center;
  width: 100%;
`;

export const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.4375rem;
`;

export const ButtonZone = styled.div`
  display: flex;
  justify-content: center;
`;

const EditButton = styled(Button)`
  ${({ theme }) => {
    const { fontSize } = theme;
    return css`
      font-size: ${fontSize.xxs};
      border-radius: 0.625rem;
      padding: 0.3125rem 4.625rem;
    `;
  }}
`;

const NavBar = () => {
  const [userInfo, setUserInfo] = useState<User | null>(null);
  const { name, nickName, profileImageUrl, statusMessage } = useSelector<State, UserState>((state) => state.user);
  const dispatch = useDispatch();

  const onLogout = () => {
    removeCookieToken();
    dispatch(logout());
  };

  useEffect(() => {
    mainInstance
      .getUserInfo()
      .then((response) => {
        setUserInfo(response.data);
        dispatch(setUser(response.data));
      })
      .catch((error) => console.log(error));
  }, [dispatch]);

  return (
    <Container>
      <ProfileContainer>
        <ProfileBox>
          <ProfileMain name={name} id={nickName} profileImg={profileImageUrl} />
          <ButtonZone>
            <Link href="/edit-profile">
              <a aria-label="내 프로필 수정하기" role="button">
                <EditButton buttonType="primary" buttonRole="link">
                  Edit profile
                </EditButton>
              </a>
            </Link>
          </ButtonZone>
        </ProfileBox>
        <ProfileBox>
          <ProfileDetail InfoType="follow" following={userInfo?.followingsNum} follower={userInfo?.followersNum} />
          <ProfileDetail InfoType="company" text={userInfo?.company} />
          <ProfileDetail InfoType="message" text={statusMessage} />
        </ProfileBox>
      </ProfileContainer>
      <NavMenu onClick={onLogout} />
    </Container>
  );
};

export default NavBar;
