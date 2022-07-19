import styled, { css } from 'styled-components';
import Search from '@/icons/search.svg';
import { useRef, useState } from 'react';

export const Box = styled.div`
  ${({ theme }) => {
    const { colors, fontSize } = theme;
    return css`
      display: flex;
      padding: 1.4375rem 2.5625rem;
      border-radius: 0.375rem;
      align-items: center;
      max-width: 36.25rem;

      input {
        border: none;
        padding: 1.375rem 0 1.375rem 0.625rem;
        width: 100%;
        outline: none;

        ::placeholder {
          color: ${colors.navy};
          font-size: ${fontSize.sm};
        }
      }
    `;
  }}
`;

const SearchBox = () => {
  const [value, setValue] = useState('');
  console.log(value);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Box>
      <Search />
      <input
        placeholder="Search"
        value={value}
        ref={inputRef}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </Box>
  );
};

export default SearchBox;
