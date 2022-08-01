import AddButton, { AddButtonProps } from '@/buttons/AddButton';
import styled, { css } from 'styled-components';

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
        color: ${colors.navy};
        font-size: ${fontSize.lg};
      }
    `;
  }}
`;

interface AddSomethingContainerProps extends AddButtonProps {
  title: string;
}

const AddSomethingContainer = ({ title, ariaLabel, onClick }: AddSomethingContainerProps) => {
  return (
    <Container>
      <span>{title}</span>
      <AddButton onClick={onClick} ariaLabel={ariaLabel} />
    </Container>
  );
};

export default AddSomethingContainer;
