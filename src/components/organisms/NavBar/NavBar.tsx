import NavMenu from '@/molecules/navBar/NavMenu';
import ProfileDetail from '@/contents/ProfileDetail';
import ProfileMain from '@/contents/ProfileMain';
import styled, { css } from 'styled-components';
import Button from '@/buttons/Button';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { logout, setUser } from 'store/features/userSlice';
import { useEffect, useState } from 'react';
import { removeCookieToken } from 'utils/storage/authCookie';
import subInstance from 'utils/api/sub';
import { Iuser } from 'type';

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
  const [userInfo, setUserInfo] = useState<Iuser | null>(null);
  const dispatch = useDispatch();

  const onLogout = () => {
    removeCookieToken();
    dispatch(logout());
  };

  useEffect(() => {
    subInstance
      .getUserInfo()
      .then((response) => {
        setUserInfo(response.data);
        console.log('userInfo', response.data);
        dispatch(setUser(response.data));
      })
      .catch((error) => console.log(error));
  }, [dispatch]);

  return (
    <Container>
      <ProfileContainer>
        <ProfileBox>
          <ProfileMain name={userInfo?.name} id={userInfo?.nickName} profileImg={userInfo?.profileImageUrl} />
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
          <ProfileDetail InfoType="message" text={userInfo?.statusMessage} />
        </ProfileBox>
      </ProfileContainer>
      <NavMenu onClick={onLogout} />
    </Container>
  );
};

export default NavBar;
