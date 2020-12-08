import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';
import { VscClose } from 'react-icons/vsc';

const SearchBar: React.FC = () => {
  const history = useHistory();
  const [term, setTerm] = useState<string>('');

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) =>
      setTerm(event.currentTarget.value),
    []
  );

  const handleSearch = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      history.push({
        pathname: '/search',
        search: `?q=${term}`,
        state: { some: 'state' },
      });
    },
    [history, term]
  );

  const handleReset = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      event.preventDefault();
      setTerm('');
    },
    []
  );

  return (
    <SearchForm onSubmit={handleSearch}>
      <SearchInputContainer>
        <SearchIconContainer>
          <SearchIcon size={14} />
        </SearchIconContainer>
        <SearchInput
          placeholder="검색"
          value={term}
          onChange={handleChange}
          id={'search-input'}
        />
        <ResetButton $isDisplay={!!term} onClick={handleReset}>
          <VscClose size={16} />
        </ResetButton>
      </SearchInputContainer>
    </SearchForm>
  );
};

const SearchForm = styled.form`
  display: inline;
`;

const SearchInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto 20px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.gray[5]};
  align-items: center;
`;

const SearchIconContainer = styled.span`
  display: flex;
  padding: 0 10px;
`;

const SearchIcon = styled(BsSearch)`
  color: ${({ theme }) => theme.typography.secondary};
`;

const SearchInput = styled.input`
  display: inline-flex;
  width: 100%;
  padding: 4px 0;
  font-size: 14px;
  line-height: 1.5715;
  background: none;
  border: none;

  :focus {
    outline: none;
  }
`;

const ResetButton = styled.a<{ $isDisplay: boolean }>`
  display: ${({ $isDisplay }) => ($isDisplay ? 'inline-flex' : 'none')};
  color: ${({ theme }) => theme.typography.secondary};
  align-items: center;
  justify-content: center;
  border: none;
  box-sizing: border-box;
  padding: 0 6px;
  cursor: pointer;

  :focus {
    outline: none;
  }
`;

export default SearchBar;
