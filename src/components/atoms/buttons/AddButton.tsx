import styled, { css } from 'styled-components';
import Plus from '@/icons/plus.svg';

export const Button = styled.button`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      border-radius: 50%;
      display: flex;
      border: none;
      background-color: ${colors.primary};
      justify-content: center;
      align-items: center;
      padding: 0.5625rem;

      &:hover {
        cursor: pointer;
      }

      &:active {
        background-color: ${colors.clickbtn1};
      }
    `;
  }}
`;

export interface AddButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  ariaLabel?: string;
}

const AddButton = ({ onClick, ariaLabel }: AddButtonProps) => {
  return (
    <Button onClick={onClick} aria-label={ariaLabel}>
      <Plus />
    </Button>
  );
};

export default AddButton;
