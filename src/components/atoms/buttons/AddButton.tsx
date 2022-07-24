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
    `;
  }}
`;

interface AddButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const AddButton = ({ onClick }: AddButtonProps) => {
  return (
    <Button onClick={onClick}>
      <Plus />
    </Button>
  );
};

export default AddButton;
