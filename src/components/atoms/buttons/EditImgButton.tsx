import EditImage from '@/icons/edit_img.svg';
import styled, { css } from 'styled-components';

export const Button = styled.button`
  ${({ theme }) => {
    const { colors, fontSize } = theme;
    return css`
      border: none;
      color: ${colors.purple};
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: transparent;
      padding: 0;
      font-size: ${fontSize.xs};

      &:hover {
        cursor: pointer;
      }
    `;
  }}
`;

const EditImgButton = () => {
  return (
    <Button onClick={() => console.log('edit')}>
      <EditImage />
      edit
    </Button>
  );
};
export default EditImgButton;
