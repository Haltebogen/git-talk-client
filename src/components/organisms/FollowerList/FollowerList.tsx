import SearchBox from '@/molecules/search/SearchBox';
import styled, { css } from 'styled-components';
import Profile from '@/icons/profile_img.svg';
import AddSomethingContainer from '@/molecules/addSomething/AddSomethingContainer';
import { BasicInputProps } from '@/inputs/BasicInput';
import { ButtonProps } from '@/buttons/Button';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { MemberState, setMember } from 'store/features/memberSlice';
import { BoxLayout } from '@/boxes/Box';
import subInstance from 'utils/api/sub';
import { useEffect, useState } from 'react';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 1.25rem;
`;

export const ListZone = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.4375rem;
  align-items: center;
`;

const FollowerListBox = styled(BoxLayout)`
  gap: 1.3125rem;
  align-items: center;
  border: none;
  min-width: 36.25rem;
  max-height: 5.875rem;
  min-height: 5.875rem;

  .profileImg {
    position: absolute;
    padding: 1.25rem 0 1.25rem 2.1875rem;
    width: 100%;
  }

  .profileIconImg {
    position: absolute;
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
      padding-left: 8.125rem;
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

type FollowerListTypeProps = ButtonProps & BasicInputProps;

interface FollowerListProps extends FollowerListTypeProps {
  openModal: () => void;
}

const STATUSMSG_MAX_LENGTH = 20;

const FollowerList = ({ onChange, value, openModal }: FollowerListProps) => {
  const [followMember, setFollowMember] = useState<MemberState[]>([]);
  useEffect(() => {
    subInstance.getFollows().then((response) => {
      setFollowMember(
        response.data.filter((data1: MemberState, i: number) => {
          return (
            response.data.findIndex((data2: MemberState) => {
              return data1.id === data2.id;
            }) === i
          );
        }),
      );
    });
  }, []);
  const dispatch = useDispatch();

  return (
    <Container>
      <AddSomethingContainer title="친구" ariaLabel="친구 추가" onClick={openModal} />
      <SearchBox onChange={onChange} value={value} />
      <ListZone>
        {followMember?.map((data: any) => (
          <div key={data.id}>
            <FollowerListBox boxType="list" onClick={() => dispatch(setMember(data))} key={data?.id}>
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
      </ListZone>
    </Container>
  );
};

export default FollowerList;
