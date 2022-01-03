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
  display: flex;
  justify-content: center;
  background: blue;
  background-color: white;
  // background-image: linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%);
  padding-block: 20px;
`;

const Chart = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;

  h2 {
    margin-bottom: 20px;
  }
`;

