import ContentInput, { ContentInputProps } from '@/inputs/ContentInput';
import styled, { css } from 'styled-components';

const Container = styled.div`
  ${({ theme }) => {
    const { colors, fontSize } = theme;
    return css`
      display: flex;
      flex-direction: column;
      gap: 0.4375rem;

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

export interface EditProfileContentProps extends ContentInputProps {
  title: string;
  details: string;
  type: 'STATUS' | 'BIO';
}

const EditProfileContent = ({ title, details, type, value, onChange }: EditProfileContentProps) => {
  return (
    <Container>
      <span>{title}</span>
      {type === 'STATUS' && <ContentInput maxRows={2} maxLength={50} value={value} onChange={onChange} />}
      {type === 'BIO' && <ContentInput minRows={6} maxRows={6} maxLength={500} value={value} onChange={onChange} />}
      <p>{details}</p>
    </Container>
  );
};

export default EditProfileContent;
