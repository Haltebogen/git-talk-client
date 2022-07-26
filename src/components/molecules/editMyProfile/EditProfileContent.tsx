import ContentInput from '@/inputs/ContentInput';
import styled, { css } from 'styled-components';

const Container = styled.div`
  ${({ theme }) => {
    const { colors, fontSize } = theme;
    return css`
      display: flex;
      flex-direction: column;
      gap: 0.25rem;

      span {
        font-size: ${fontSize.xl};
        color: ${colors.darkgray};
        font-weight: 700;
      }

      p {
        font-size: ${fontSize.micro};
        color: ${colors.darkgray};
      }
    `;
  }}
`;

export interface EditProfileContentProps {
  title: string;
  details: string;
}

const EditProfileContent = ({ title, details }: EditProfileContentProps) => {
  return (
    <Container>
      <span>{title}</span>
      <ContentInput />
      <p>{details}</p>
    </Container>
  );
};

export default EditProfileContent;
