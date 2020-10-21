import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

const SearchBar: React.FC = () => {
  const [term, setTerm] = useState<string>('');

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) =>
      setTerm(event.currentTarget.value),
    []
  );

  const handleReset = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault();
      setTerm('');
    },
    []
  );

  return (
    <SearchContainer>
      <SearchInputContainer>
        <SearchInput placeholder="검색" value={term} onChange={handleChange} />
        <ResetButton $isDisplay={!!term} onClick={handleReset}>
          X
        </ResetButton>
      </SearchInputContainer>
    </SearchContainer>
  );
};

const SearchContainer = styled.form`
  display: inline;
`;

const SearchInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto 20px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.gray[5]};
`;

const SearchInput = styled.input`
  display: inline-flex;
  width: 100%;
  padding: 4px 15px;
  line-height: 22px;
  background: none;
  border: none;

  :focus {
    outline: none;
  }
`;

const ResetButton = styled.button<{ $isDisplay: boolean }>`
  display: ${({ $isDisplay }) => ($isDisplay ? 'inline-flex' : 'none')};
  align-items: center;
  justify-content: center;
  border: none;
  box-sizing: border-box;
  padding: 0 8px;

  :focus {
    outline: none;
  }
`;

export default SearchBar;
