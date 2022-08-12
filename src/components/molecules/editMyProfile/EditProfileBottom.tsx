import EditProfileUserInfo from '@/contents/EditProfileUserInfo';
import EditProfileContent from './EditProfileContent';
import EditProfileImg from './EditProfileImg';
import styled, { css } from 'styled-components';
import { ContentInputProps } from '@/inputs/ContentInput';
import { ButtonLayout } from '@/buttons/Button';

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 1.875rem 2.75rem 0 2.75rem;
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
  padding-right: 3.4375rem;
  flex-direction: column;
`;

const EditButton = styled(ButtonLayout)`
  ${({ theme }) => {
    const { fontSize } = theme;
    return css`
      border-radius: 0.625rem;
      padding: 0.5rem 1.875rem;
      font-size: ${fontSize.xs};
      max-width: 7.5rem;
    `;
  }}
`;

const EditProfileBottom = ({ value, onChange }: ContentInputProps) => {
  return (
    <Container>
      <Left>
        <EditProfileUserInfo name="Kimkyungmin" id="github_id" />
        <EditProfileContent
          title="Status Message"
          type="STATUS"
          details="상태 메시지는 최대 50 자까지 작성하실 수 있습니다."
          value={value}
          onChange={onChange}
        />
        <EditProfileContent
          title="Bio"
          type="BIO"
          details="자기소개는 최대 500자까지 작성이 가능합니다. 욕설이나 비방을 하는 글은 자제해 주세요."
          value={value}
          onChange={onChange}
        />
        <EditButton
          ariaLabel="수정 완료"
          onClick={() => {
            console.log('수정완료');
          }}
          buttonType="primary"
        >
          수정완료
        </EditButton>
      </Left>
      <Right>
        <EditProfileImg profileImg={null} />
      </Right>
    </Container>
  );
};

export default EditProfileBottom;
