import { BoxLayout, BoxProps } from '@/boxes/Box';
import styled, { css } from 'styled-components';
import Profile from '@/icons/profile_img.svg';
import { Member } from 'type';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { setMember } from 'store/features/memberSlice';

const FollowerListBox = styled(BoxLayout)`
  gap: 1.3125rem;
  align-items: center;
  border: none;
  min-width: 36.25rem;
  max-height: 5.875rem;
  min-height: 5.875rem;

  .profileImg {
    padding-left: 2.6875rem;
    padding: 0;
    width: 100%;
  }
  .profileIconImg {
    padding: 1.25rem 0 1.25rem 2.1875rem;
    width: 100%;
    transform: scale(0.2);
    max-width: 3.25rem;

    svg {
      padding-left: 2.8125rem;
    }
  }
`;

const ProfileImage = styled(Image)`
  border-radius: 50%;
`;

export const Name = styled.div`
  ${({ theme }) => {
    const { fontSize } = theme;
    return css`
      font-size: ${fontSize.sm};
      display: flex;
      width: 100%;
      font-weight: 700;
      justify-content: flex-start;
      padding-left: 2.25rem;
    `;
  }}
`;

export const StatusMessage = styled.div`
  ${({ theme }) => {
    const { fontSize } = theme;
    return css`
      font-size: ${fontSize.sm}
      padding-left: 2.25rem;;
      display: flex;
      justify-content: flex-start;
      width: 100%;
      height:100%
      max-width: 12.5rem;
      min-width: 8.75rem;
    `;
  }}
`;

interface FollowerListContainerProps extends BoxProps {
  followMember: Member[];
}

const STATUSMSG_MAX_LENGTH = 20;

const FollowerListContainer = ({ followMember }: FollowerListContainerProps) => {
  const dispatch = useDispatch();
  const onListClick = () => {
    dispatch(setMember);
  };

  return (
    <>
      {followMember?.map((data: any) => (
        <div key={data.id}>
          <FollowerListBox boxType="list" onClick={onListClick} key={data?.id}>
            {data.profileImageUrl ? (
              <div className="profileImg">
                <ProfileImage src={data.profileImageUrl} alt="팔로워 프로필" width={70} height={70} unoptimized={true} />
              </div>
            ) : (
              <div className="profileIconImg">
                <Profile />
              </div>
            )}
            <Name>{data.name}</Name>
            <StatusMessage>
              {data.statusMessage &&
                (data.statusMessage.length > STATUSMSG_MAX_LENGTH ? `${data.statusMessage.slice(0, STATUSMSG_MAX_LENGTH)} ...` : data.statusMessage)}
            </StatusMessage>
          </FollowerListBox>
        </div>
      ))}
    </>
  );
};

export default FollowerListContainer;
