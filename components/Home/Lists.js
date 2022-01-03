import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../redux/app/hooks.ts';
import { HomeText } from '../../language';
import ChartListArtist from './ChartListArtist';

const ListsSection = () => {
  const chart = useAppSelector(state => state.content.chart);
  const language = useAppSelector(state => state.userPreferences.language);

  return (
    <Container>
      <Chart>
        {chart && <h2>{HomeText.artists[language]}</h2>}
        {chart && chart.artists.data.map(({ id, position, picture_big, name, link }) => (
          <ChartListArtist
            position={position}
            link={link}
            mainText={name}
            image={picture_big}
            key={id}
          />
        ))}
      </Chart>

      <Chart>
        {chart && <h2>{HomeText.albums[language]}</h2>}
        {chart &&
          chart.albums.data.map(({ id, position, cover_big, artist, title, link }) => (
            <ChartListArtist
              position={position}
              link={link}
              mainText={title}
              secondaryText={artist.name}
              image={cover_big}
              key={id}
            />
          ))}
      </Chart>

      <Chart>
        {chart && <h2>{HomeText.playlists[language]}</h2>}
        {chart &&
          chart.playlists.data.map(({ id, position, picture_big, user, title, link }) => (
            <ChartListArtist
              position={position}
              link={link}
              mainText={title}
              secondaryText={user.name}
              image={picture_big}
              key={id}
            />
          ))}
      </Chart>

    </Container>
  );
};

export default ListsSection;

const Container = styled.div`
  align-items: flex-start;
  background-color: white;
  display: flex;
  justify-content: center;
  padding-block: 20px;
  width: 100%;

  @media(max-width: 1024px) {
    flex-flow: row wrap;
    justify-content: space-between;
    padding: 0 1rem;
   
  }
`;

const Chart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;

  @media(max-width: 1024px) {
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    padding-block: 40px;
    width: 100%;
  }

  h2 {
    margin-bottom: 20px;
  }
`;
