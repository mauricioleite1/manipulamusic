import React from 'react';
import styled from 'styled-components';
import Card from '../Card';

const HeroList = ({ data }) => {
  const top3 = (data.tracks.data.slice(0, 5));

  return (
    <Container>
      <Top3>
        <Title>Top 5</Title>
        {data && top3.map(({ id, title, artist, album }) => (
          <Card
            key={id}
            mainText={title}
            secondaryText={artist.name}
            picture={album.cover_xl}
          />
        ))}
      </Top3>

      <List>
        {data && data.tracks.data.map(({ id, link, position, title, artist, preview }) => (
          <Track key={id}>
            <h6>{position}</h6>
            <div>
              <h5>{title}</h5>
              <h6>{artist.name}</h6>

            </div>

            <a href={link} target="_blank" rel="noreferrer">
              <button>Ouvir completa no Deezer</button>
            </a>

            <audio src={ preview } preload="auto" controls>
              <track kind="captions" />
              O seu navegador não suporta o elemento <code>audio</code>.
            </audio>

            <button>Favorito</button>

          </Track>
        ))}
      </List>
    </Container>
  )
}

export default HeroList;

const Container = styled.section`
align-items: center;
justify-content: center;
  display: flex;
  flex-flow: row wrap;
  gap: 10px;
`;

const Title = styled.h2`
background: #121FCF;
    background:
    linear-gradient(
      40deg,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(100, 100, 192,0.9) 46%,
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

const Top3 = styled.div`
  align-items: center;
  justify-content: center;
  cursor: pointer;
  display: flex;
  flex-flow: row wrap;
  gap: 10px;
  position: relative;
  margin: auto;
`;

const List = styled.ul`
  align-items: center;
  height: 20rem;
  display: flex;
  flex-direction column;
  overflow-y: scroll;
  gap: 2px;
  list-style-type: none;
  margin: auto;
`;

const Track = styled.li`
  align-items: center;
  border-radius: 40px;
  display: flex;
  gap: 10px;
  background: linear-gradient(45deg, silver 25%, purple, gold 55%);
  background-color: #4158D0;
  background-image: linear-gradient(43deg, lightgrey 0%, #f4f4f4 100%);
  padding-inline: 10px;
  width: 80rem;

  h6 {
    color: darkgrey;
    font-weight: 300;
  }

`;