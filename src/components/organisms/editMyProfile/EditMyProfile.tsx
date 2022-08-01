import { ContentInputProps } from '@/inputs/ContentInput';
import EditProfileBottom from '@/molecules/editMyProfile/EditProfileBottom';
import EditProfileTop from '@/molecules/editMyProfile/EditProfileTop';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const EditMyProfile = ({ value, onChange }: ContentInputProps) => {
  return (
    <Container>
      <EditProfileTop />
      <EditProfileBottom value={value} onChange={onChange} />
    </Container>
  );
};

export default EditMyProfile;
