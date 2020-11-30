import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

type MovieCardProps = {
  imageSrc?: string;
} & Movie;

const MovieCard: React.FC<MovieCardProps> = ({ id, title, imageSrc }) => {
  return (
    <Link href={`/movies/${id}`} passHref={true}>
      <MovieCardContainer>
        <MoviePosterPlacer>
          <MoviePosterContainer>
            <MovieCardImage src={imageSrc || '/images/poster.jpg'} />
          </MoviePosterContainer>
        </MoviePosterPlacer>
        <MovieInfo>
          <MovieTitle>{title}</MovieTitle>
          <MovieSimpleInfo>2011</MovieSimpleInfo>
        </MovieInfo>
      </MovieCardContainer>
    </Link>
  );
};

const MovieCardContainer = styled.a`
  width: 100%;
  color: ${({ theme }) => theme.typography.primary};
  text-decoration: none;
`;

const MoviePosterPlacer = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 145.37037037037038%;
`;

const MoviePosterContainer = styled.div`
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;

const MovieCardImage = styled.img`
  vertical-align: top;
  width: 100%;
  height: 100%;
  opacity: 1;
  object-fit: cover;
  background: rgb(248, 248, 248);
  transition: all 300ms ease 0s;
`;

const MovieInfo = styled.div`
  margin-top: 8px;
`;

const MovieTitle = styled.h4`
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.typography.primary};
`;

const MovieSimpleInfo = styled.span`
  color: ${({ theme }) => theme.typography.secondary};
`;

export default MovieCard;
