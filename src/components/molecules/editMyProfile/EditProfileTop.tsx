import EditImgButton from '@/buttons/EditImgButton';
import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

const Background = styled.div`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      width: 100%;
      padding-top: 25rem; // 임시크기
      background-color: ${colors.profilebgcolor};
    `;
  }}
`;

const ButtonZone = styled.div`
  position: absolute;
  padding-top: 23.75rem;
`;

export interface EditProfileTopProps {
  profileImg?: string | null;
}

const EditProfileTop = ({ profileImg }: EditProfileTopProps) => {
  return (
    <Container>
      {profileImg || <Background></Background>}
      <ButtonZone>
        <EditImgButton />
      </ButtonZone>
    </Container>
  );
};

export default EditProfileTop;
