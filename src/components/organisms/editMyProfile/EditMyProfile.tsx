import EditProfileBottom from '@/molecules/editMyProfile/EditProfileBottom';
import EditProfileTop from '@/molecules/editMyProfile/EditProfileTop';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const EditMyProfile = () => {
  return (
    <Container>
      <EditProfileTop />
      <EditProfileBottom />
    </Container>
  );
};

export default EditMyProfile;
