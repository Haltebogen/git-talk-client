import { Button, AddButtonProps } from './AddButton';
import styled, { css } from 'styled-components';
import More from '@/icons/more.svg';

export const WhiteBtn = styled(Button)`
  ${({ theme }) => {
    const { colors } = theme;

    return css`
      background-color: ${colors.secondary};
      box-shadow: 0.0875rem 0.0875rem rgba(0, 0, 0, 0.1);
      margin-top: 1.625rem;
    `;
  }}
`;

export const MoreButton = ({ onClick }: AddButtonProps) => {
  return (
    <WhiteBtn onClick={onClick}>
      <More />
    </WhiteBtn>
  );
};

export default MoreButton;
