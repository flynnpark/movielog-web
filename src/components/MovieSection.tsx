import React from 'react';
import styled from 'styled-components';

const MovieSection: React.FC = ({ children }) => {
  return <HorizontalList>{children}</HorizontalList>;
};

const HorizontalList = styled.div`
  display: flex;
  flex-direction: row;
`;

export default MovieSection;
