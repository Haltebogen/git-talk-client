import { useRef, useState } from 'react';
import styled, { css } from 'styled-components';

const Input = styled.input`
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

const BasicInput = () => {
  const [value, setValue] = useState('');
  console.log(value);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <Input
        placeholder="Search"
        value={value}
        ref={inputRef}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </>
  );
};

export default BasicInput;
