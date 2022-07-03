import styled, { css } from 'styled-components';
import ImgAdd from '../../../assets/icons/imgadd.svg';

const EditImg = styled.div`
  ${({ theme }) => {
    const { colors, fontSize } = theme;
    return css`
      padding: 0rem 0rem;
      margin: 0rem 0rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: ${fontSize.xxs};
      color: ${colors.primary};
      width: 3.5rem;
      height: 3.5rem;
      line-height: 0.1rem;
      &:hover {
        cursor: pointer;
      }
    `;
  }}
`;

const ImgEditButton = () => {
  return (
    <EditImg>
      <ImgAdd />
      edit
    </EditImg>
  );
};

export default ImgEditButton;
