import styled, { css } from 'styled-components';
import Search from '@/icons/search.svg';
import BasicInput, { BasicInputProps } from '@/inputs/BasicInput';

export const Box = styled.div`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      display: flex;
      width: 100%;
      padding: 1.4375rem 2.5625rem;
      border-radius: 0.375rem;
      align-items: center;
      max-width: 36.25rem;
      background-color: ${colors.boxcolor};
    `;
  }}
`;

const SearchBox = ({ onChange, value }: BasicInputProps) => {
  return (
    <Box>
      <Search />
      <BasicInput placeholder="Search" onChange={onChange} value={value} />
    </Box>
  );
};

export default SearchBox;
