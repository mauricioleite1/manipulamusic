import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../../redux/app/hooks.ts';
import Card from '../../Card'

const TopList = ({ data }) => {
  const resultsList = useAppSelector(state => state.content.resultsList);
  const top5 = (resultsList.slice(0, 5));

  return (
    <Container>
      <Title>Top 5</Title>
      {data && top5.map(({ id, title, artist, album, link }) => (
        <Card
          key={id}
          mainText={title}
          secondaryText={artist.name}
          picture={album.cover_xl}
          link={link}
        />
      ))}
    </Container>
  );
};

export default TopList;

const Container = styled.div`
  align-items: center;
  justify-content: center;
  cursor: pointer;
  display: flex;
  flex-flow: row wrap;
  gap: 10px;
  position: relative;
  margin: auto;
  
  @media(max-width: 1024px) {
    // height: 20rem;
    overflow: hidden;
  }
  @media(max-width: 800px) {
    // height: 53.8rem;
    overflow: hidden;
  }
`;

const Title = styled.h2`
  background: #121FCF;
    background:
    linear-gradient(
      40deg,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(100, 200, 192,0.8) 46%,
      rgba(100, 200, 100,0.8) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 28px;
    font-weight: 700;
    left: 0;
    letter-spacing: 0.1rem;
    position: absolute;
    top: -2.5rem;
`;
