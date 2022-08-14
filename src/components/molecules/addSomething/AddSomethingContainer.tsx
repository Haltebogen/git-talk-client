import { ButtonProps, ButtonLayout } from '@/buttons/Button';
import styled, { css } from 'styled-components';
import Plus from '@/icons/plus.svg';

export const Container = styled.div`
  ${({ theme }) => {
    const { colors, fontSize } = theme;
    return css`
      display: flex;
      width: 100%;
      max-width: 36.25rem;
      padding: 0 0.9375rem 0.625rem 0.9375rem;
      justify-content: space-between;
      align-items: center;

      span {
        width: 100%;
        color: ${colors.navy};
        font-size: ${fontSize.lg};
      }
    `;
  }}
`;

const AddButton = styled(ButtonLayout)`
  max-width: 2.9375rem;
`;

interface AddSomethingContainerProps extends ButtonProps {
  title: string;
}

const AddSomethingContainer = ({ title, ariaLabel, onClick }: AddSomethingContainerProps) => {
  return (
    <Container>
      <span>{title}</span>
      <AddButton onClick={onClick} ariaLabel={ariaLabel} buttonType="circle">
        <Plus />
      </AddButton>
    </Container>
  );
};

export default AddSomethingContainer;
