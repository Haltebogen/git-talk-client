import { ChangeEventHandler, useRef } from 'react';
import styled, { css } from 'styled-components';

export const Input = styled.input`
  ${({ theme }) => {
    const { colors, fontSize } = theme;
    return css`
      border: none;
      padding-left: 0.625rem;
      width: 100%;
      outline: none;

      ::placeholder {
        color: ${colors.navy};
        font-size: ${fontSize.sm};
      }
    `;
  }}
`;

export interface BasicInputProps {
  placeholder?: string;
  value: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const BasicInput = ({ placeholder, value, onChange }: BasicInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <Input placeholder={placeholder} onChange={onChange} value={value} ref={inputRef} />
    </>
  );
};

export default BasicInput;
