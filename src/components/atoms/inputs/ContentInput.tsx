import { useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';

const Textarea = styled(TextareaAutosize)`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      width: 100%;
      border: 0.0625rem solid ${colors.primary};
      padding: 0.625rem 0.75rem;
      max-width: 63.3125rem;
      border-radius: 0.9375rem;
      outline: none;

      &:focus {
        border: 0.0625rem solid ${colors.focus};
      }
    `;
  }}
`;

export interface ContentInputProps {
  minRows?: number;
  maxRows?: number;
  maxLength?: number;
}

const ContentInput = ({ minRows, maxRows, maxLength }: ContentInputProps) => {
  const [value, setValue] = useState('');
  console.log(value);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  return (
    <>
      <Textarea
        value={value}
        ref={inputRef}
        minRows={minRows}
        maxRows={maxRows}
        maxLength={maxLength}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </>
  );
};

export default ContentInput;
