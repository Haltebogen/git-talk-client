import styled, { css } from 'styled-components';

const Button = styled.div`
  ${({ theme }) => {
    const { colors, fontSize } = theme;
    return css`
      background-color: ${colors.primary};
      text-decoration: none;
      border: none;
      padding: 0.435rem 1.875rem;
      font-size: ${fontSize.xs};
      border-radius: 0.625rem;
      color: ${colors.white};
      &:hover {
        cursor: pointer;
      }
    `;
  }}
`;

const EditdoneBtn = () => {
  return <Button>수정완료</Button>;
};

export default EditdoneBtn;
