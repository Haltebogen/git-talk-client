import { useRef, useState } from 'react';
import styled, { css } from 'styled-components';

const Textarea = styled.textarea`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      width: 100%;
      border: 0.0625rem solid ${colors.primary};
      max-width: 63.3125rem;
      border-radius: 0.9375rem;
    `;
  }}
`;

const ContentInput = () => {
  const [value, setValue] = useState('');
  console.log(value);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  return (
    <>
      <Textarea
        value={value}
        ref={inputRef}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </>
  );
};

export default ContentInput;
