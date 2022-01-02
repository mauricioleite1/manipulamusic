import React from 'react';
import styled from 'styled-components';
import Card from '../Card';

const HeroList = ({ data }) => (
  <Container>
    {data && data.tracks.data.map(({ id, title, artist, album }) => (
      <Card
        key={id}
        mainText={title}
        secondaryText={artist.name}
        picture={album.cover_xl}
      />
    ))}
  </Container>
)

export default HeroList;

const Container = styled.div`
  cursor: pointer;
  display: flex;
  flex-flow: row nowrap;
  gap: 10px;
  margin: auto;
  overflow: hidden;
  padding-block: 40px;
  width: 80%;
`;
