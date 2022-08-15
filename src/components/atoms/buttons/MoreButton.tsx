import { ButtonLayout, ButtonProps } from '@/buttons/Button';
import styled, { css } from 'styled-components';
import More from '@/icons/more.svg';

export const WhiteBtn = styled(ButtonLayout)`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      box-shadow: 0.0875rem 0.0875rem rgba(0, 0, 0, 0.1);
      background-color: ${colors.white};
    `;
  }}
`;

export const MoreButton = ({ onClick }: ButtonProps) => {
  return (
    <WhiteBtn onClick={onClick} buttonType="circle">
      <More />
    </WhiteBtn>
  );
};

export default MoreButton;
