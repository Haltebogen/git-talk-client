import EditImgButton from '@/buttons/EditImgButton';
import styled, { css } from 'styled-components';
import EditProfileUserInfo from '@/contents/EditProfileUserInfo';
import EditProfileContent from '@/molecules/editMyProfile/EditProfileContent';
import { ButtonLayout } from '@/buttons/Button';
import EditProfileImg from '@/molecules/editMyProfile/EditProfileImg';
import useInput from 'hooks/useInput';
import { IUserState } from 'store/features/userSlice';
import { State } from 'store/configureStore';
import { useSelector } from 'react-redux';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TopContainer = styled.div`
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

const BottomContainer = styled.div`
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

const EditMyProfile = () => {
  const [statusValue, onStatusChange, setStatusValue] = useInput('');
  const [bioValue, onBioChange, setBioValue] = useInput('');
  const { name, nickName, profileImageUrl } = useSelector<State, IUserState>((state) => state.user);

  return (
    <Container>
      <TopContainer>
        {
          // profileImg ||
          <Background></Background>
        }
        <ButtonZone>
          <EditImgButton />
        </ButtonZone>
      </TopContainer>
      <BottomContainer>
        <Left>
          <EditProfileUserInfo name={name} id={nickName} />
          <EditProfileContent
            title="Status Message"
            inputType="status"
            details="상태 메시지는 최대 50 자까지 작성하실 수 있습니다."
            statusValue={statusValue}
            onStatusChange={onStatusChange}
          />
          <EditProfileContent
            title="Bio"
            inputType="bio"
            details="자기소개는 최대 500자까지 작성이 가능합니다. 욕설이나 비방을 하는 글은 자제해 주세요."
            bioValue={bioValue}
            onBioChange={onBioChange}
          />
          <EditButton
            ariaLabel="수정 완료"
            onClick={() => {
              setStatusValue('');
              setBioValue('');
            }}
            buttonType="primary"
            buttonRole="event"
          >
            수정완료
          </EditButton>
        </Left>
        <Right>
          <EditProfileImg profileImg={profileImageUrl} />
        </Right>
      </BottomContainer>
    </Container>
  );
};

export default EditMyProfile;
