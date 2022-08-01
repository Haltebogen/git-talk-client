import { ChangeEventHandler, useRef } from 'react';
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
  value: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;

  minRows?: number;
  maxRows?: number;
  maxLength?: number;
}

const ContentInput = ({ value, onChange, minRows, maxRows, maxLength }: ContentInputProps) => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  return (
    <>
      <Textarea value={value} ref={inputRef} onChange={onChange} minRows={minRows} maxRows={maxRows} maxLength={maxLength} />
    </>
  );
};

export default ContentInput;
