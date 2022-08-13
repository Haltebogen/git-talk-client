import SearchBox from '@/molecules/search/SearchBox';
import FollowerListContainer from '@/molecules/followerList/FollowerListContainer';
import styled from 'styled-components';
import AddSomethingContainer from '@/molecules/addSomething/AddSomethingContainer';
import { BasicInputProps } from '@/inputs/BasicInput';
import { AddButtonProps } from '@/buttons/AddButton';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 1.25rem;
`;

type FollowerListProps = AddButtonProps & BasicInputProps;

const FollowerList = ({ onChange, value, onClick }: FollowerListProps) => {
  return (
    <Container>
      <AddSomethingContainer title="친구" ariaLabel="친구 추가" onClick={onClick} />
      <SearchBox onChange={onChange} value={value} />
      <FollowerListContainer />
    </Container>
  );
};

export default FollowerList;
