import React from 'react';
import Head from 'components/Head';
import styled from 'styled-components';

const NotFound: React.FC = () => {
  return (
    <>
      <Head title={'페이지를 찾을 수 없습니다'} />
      <NotFoundContainer>
        <NotFoundText>페이지를 찾을 수 없습니다.</NotFoundText>
      </NotFoundContainer>
    </>
  );
};

const NotFoundContainer = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  justify-content: center;
  align-items: center;
`;

const NotFoundText = styled.div`
  color: ${({ theme }) => theme.typography.secondary};
`;

export default NotFound;
