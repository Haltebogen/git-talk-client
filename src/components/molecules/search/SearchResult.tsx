import styled, { css } from 'styled-components';
import { BoxLayout } from '@/boxes/Box';
import { ReactNode } from 'react';

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
        width: 100%;
      }
    `;
  }}
`;

interface SearchResultProps {
  children: ReactNode;
}

const SearchResult = ({ children }: SearchResultProps) => {
  return (
    <ResultBox boxType="background">
      <ResultList>{children}</ResultList>
    </ResultBox>
  );
};

export default SearchResult;
