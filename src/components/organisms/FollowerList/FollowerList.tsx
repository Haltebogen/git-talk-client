import SearchBox from '@/molecules/search/SearchBox';
import styled from 'styled-components';
import AddSomethingContainer from '@/molecules/addSomething/AddSomethingContainer';
import { BasicInputProps } from '@/inputs/BasicInput';
import { ButtonProps } from '@/buttons/Button';
import FollowerListContainer from '@/molecules/followerList/FollowerListContainer';

export const Container = styled.div`
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

type FollowerListProps = ButtonProps & BasicInputProps;

const FollowerList = ({ onChange, value, onClick }: FollowerListProps) => {
  return (
    <Container>
      <AddSomethingContainer title="친구" ariaLabel="친구 추가" onClick={onClick} />
      <SearchBox onChange={onChange} value={value} />
      <ListZone>
        <FollowerListContainer onClick={() => console.log('click')} name="kimkyungmin" profileImg={null} statusMessage="상태메시지" />
        <FollowerListContainer onClick={() => console.log('click')} name="kimkyungmin" profileImg={null} statusMessage="상태메시지" />
        <FollowerListContainer onClick={() => console.log('click')} name="kimkyungmin" profileImg={null} statusMessage="상태메시지" />
      </ListZone>
    </Container>
  );
};

export default FollowerList;
