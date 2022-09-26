import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 0.6875rem;
  padding: 0.625rem 0;
`;

const Name = styled.div`
  ${({ theme }) => {
    const { colors, fontSize } = theme;
    return css`
      font-size: ${fontSize.xxl};
      color: ${colors.black};
    `;
  }}
`;

const Id = styled.div`
  ${({ theme }) => {
    const { colors, fontSize } = theme;
    return css`
      font-size: ${fontSize.lg};
      color: ${colors.lightgray};
    `;
  }}
`;

export interface EditProfileUserInfoProps {
  name?: string | null;
  id?: string | null;
}

const EditProfileUserInfo = ({ name, id }: EditProfileUserInfoProps) => {
  return (
    <Container>
      <Name>{name}</Name>
      <Id>{id}</Id>
    </Container>
  );
};

export default EditProfileUserInfo;
