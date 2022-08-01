import styled, { css } from 'styled-components';

export const Button = styled.button`
  ${({ theme }) => {
    const { colors, fontSize } = theme;
    return css`
      border-radius: 0.625rem;
      border: none;
      background-color: ${colors.primary};
      justify-content: center;
      padding: 0.5rem 1.875rem;
      font-size: ${fontSize.xs};
      color: ${colors.white};
      max-width: 7.5rem;

      &:hover {
        cursor: pointer;
      }

      &:active {
        background-color: ${colors.clickbtn};
      }
    `;
  }}
`;

const EditCompleteButton = () => {
  return <Button aria-label="수정 완료">수정완료</Button>;
};
export default EditCompleteButton;
