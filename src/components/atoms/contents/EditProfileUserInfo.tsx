import styled, { css } from 'styled-components';

const Container = styled.div`
  ${({ theme }) => {
    const { colors, fontSize } = theme;
    return css`
      display: flex;

      h2 {
        font-size: ${fontSize.xxl};
        color: ${colors.black};
      }

      span {
        font-size: ${fontSize.lg};
        color: ${colors.lightgray};
      }
    `;
  }}
`;

export interface EditProfileUserInfoProps {
  name: string;
  id: string;
}

const EditProfileUserInfo = ({ name, id }: EditProfileUserInfoProps) => {
  return (
    <Container>
      <h2>{name}</h2>
      <span>{id}</span>
    </Container>
  );
};

export default EditProfileUserInfo;
