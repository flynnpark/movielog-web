import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Head from 'components/Head';

const Search: React.FC = () => {
  const { query } = useRouter();
  const result: Movie[] = [];

  const title = query?.q ? `'${query?.q}' 검색 결과` : undefined;

  const childComponent = result?.length ? (
    'Search'
  ) : (
    <EmptyContainer>
      <EmptyResult>
        검색 결과가 없습니다. 다른 검색어로 검색해보세요.
      </EmptyResult>
    </EmptyContainer>
  );

  return (
    <>
      <Head title={title} />
      {childComponent}
    </>
  );
};

const EmptyContainer = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  justify-content: center;
  align-items: center;
`;

const EmptyResult = styled.div`
  color: ${({ theme }) => theme.typography.secondary};
`;

export default Search;
