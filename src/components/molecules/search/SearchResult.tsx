import styled, { css } from 'styled-components';
import { BoxLayout } from '@/boxes/Box';
import { MouseEventHandler } from 'react';

const ResultBox = styled(BoxLayout)`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      display: flex;
      justify-content: center;
      width: 100%;
      max-width: 31.25rem;
      position: fixed;
      z-index: -100;
      top: 10.4375rem;
      padding-top: 15.625rem;
      background-color: ${colors.bgcolor};
      border-radius: 0 0 0.375rem 0.375rem;
    `;
  }}
`;

const ResultList = styled.ul`
  ${({ theme }) => {
    const { colors } = theme;

    return css`
      position: absolute;
      z-index: 100;
      width: 98%;
      max-height: 12.5rem;

      list-style: none;
      top: 0;
      padding: 0;
      margin: 0;
      overflow-y: scroll;

      &::-webkit-scrollbar {
        display: none;
      }

      li {
        padding: 0.625rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        cursor: pointer;
        margin: 0;
        &:hover {
          cursor: pointer;
          background-color: ${colors.primary};
          color: ${colors.white};
        }
      }

      span {
        display: ;
        width: 100%;
      }
    `;
  }}
`;

type SearchType = 'follow' | 'chat';

interface SearchResultProps {
  searchValue: [];
  searchType?: SearchType;
  onClick: MouseEventHandler<HTMLLIElement>;
}

const SearchResult = ({ searchValue, onClick }: SearchResultProps) => {
  return (
    <ResultBox boxType="backrgound">
      <ResultList>
        {searchValue?.map((data: any, id: number) => (
          <li key={id} onClick={onClick}>
            <span>{data.nickName}</span>
          </li>
        ))}
      </ResultList>
    </ResultBox>
  );
};

export default SearchResult;
