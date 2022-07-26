import EditCompleteButton from '@/buttons/EditCompleteButton';
import EditProfileUserInfo from '@/contents/EditProfileUserInfo';
import EditProfileContent from './EditProfileContent';
import EditProfileImg from './EditProfileImg';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 0 2.75rem;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 5.25rem;
  width: 100%;
  gap: 1.5625rem;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
`;

const EditProfileBottom = () => {
  return (
    <Container>
      <Left>
        <EditProfileUserInfo name="Kimkyungmin" id="github_id" />
        <EditProfileContent title="Status Message" details="상태 메시지는 최대 50 자까지 작성하실 수 있습니다." />
        <EditProfileContent title="Bio" details="자기소개는 최대 500자까지 작성이 가능합니다. 욕설이나 비방을 하는 글은 자제해 주세요." />
        <EditCompleteButton />
      </Left>
      <Right>
        <EditProfileImg profileImg={null} />
      </Right>
    </Container>
  );
};

export default EditProfileBottom;
