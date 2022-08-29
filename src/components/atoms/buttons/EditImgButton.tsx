import EditImage from '@/icons/edit_img.svg';
import styled, { css } from 'styled-components';
import { ButtonLayout } from './Button';

const EditButton = styled(ButtonLayout)`
  ${({ theme }) => {
    const { colors, fontSize } = theme;
    return css`
      color: ${colors.purple};
      flex-direction: column;
      padding: 0;
      font-size: ${fontSize.xs};
    `;
  }}
`;

const EditImgButton = () => {
  return (
    <EditButton ariaLabel="이미지 수정" buttonType="clear" buttonRole="event">
      <EditImage />
      edit
    </EditButton>
  );
};
export default EditImgButton;
