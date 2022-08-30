import ContentInput from '@/inputs/ContentInput';
import { ChangeEventHandler } from 'react';
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

export type InputType = 'status' | 'bio';

export interface EditProfileContentProps extends EditProfileStateProps {
  title: string;
  details: string;
  inputType: InputType;
}

export interface EditProfileStateProps {
  statusValue?: string;
  bioValue?: string;
  onStatusChange?: ChangeEventHandler<HTMLTextAreaElement>;
  onBioChange?: ChangeEventHandler<HTMLTextAreaElement>;
  statusPlaceholder?: string | null | undefined;
  bioPlaceholder?: string | null | undefined;
}

const EditProfileContent = ({
  title,
  details,
  inputType,
  statusValue,
  bioValue,
  onStatusChange,
  onBioChange,
  statusPlaceholder,
  bioPlaceholder,
}: EditProfileContentProps) => {
  return (
    <Container>
      <span>{title}</span>
      {inputType === 'status' && <ContentInput placeholder={statusPlaceholder} maxRows={2} maxLength={50} value={statusValue} onChange={onStatusChange} />}
      {inputType === 'bio' && <ContentInput placeholder={bioPlaceholder} minRows={6} maxRows={6} maxLength={500} value={bioValue} onChange={onBioChange} />}
      <p>{details}</p>
    </Container>
  );
};

export default EditProfileContent;
