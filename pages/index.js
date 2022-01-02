import axios from 'axios';
import styled from 'styled-components';
import Link from 'next/link';
import { useAppSelector, useAppDispatch } from '../redux/app/hooks.ts';
import { setChart, setGenreList, setResults } from '../redux/contentSlice';
import Hero from '../components/Home/Hero';
import { useEffect } from 'react';
import ChartListArtist from '../components/Home/ChartListArtist';
import GenreSection from '../components/Home/GenreSection';
import { HomeText } from '../language';

export default function Home() {
  const chart = useAppSelector(state => state.content.chart);
  const genre = useAppSelector(state => state.content.genre);
  const results = useAppSelector(state => state.content.results);
  const language = useAppSelector(state => state.userPreferences.language)

  const dispatch = useAppDispatch();

  const getChart = async () => {
    const response = await axios.get('http://localhost:5000/chart');
    const data = response.data;
    dispatch(setChart(data));
    dispatch(setResults(data.tracks.data));
  }

  const getGenreList = async () => {
    const response = await axios.get('http://localhost:5000/genre');
    const data = response.data;
    dispatch(setGenreList(data.data));
  }

  useEffect(() => {
    getChart()
    getGenreList()
  }, [])

  return (
    <Page>
      <Hero />

      <ListsContainer>
        <ArtistsChart>
          <h2>{HomeText.artists[language]}</h2>
          {chart &&
            chart.artists.data.map(({ id, position, picture_big, name, link }) => (
              <ChartListArtist
                position={position}
                link={link}
                mainText={name}
                image={picture_big}
                key={id}
              />
            ))}
        </ArtistsChart>

        <ArtistsChart>
          <h2>{HomeText.albums[language]}</h2>
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
        </ArtistsChart>

        <ArtistsChart>
          <h2>{HomeText.playlists[language]}</h2>

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
        </ArtistsChart>

      </ListsContainer>

      {genre && <GenreSection />}

    </Page>
  );
};

const Page = styled.div`
  background: white;
  margin: auto;

  h5 {
    font-family: Inter;
    font-weight: 400;
  }
`;

const ArtistsChart = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;

  h2 {
    margin-bottom: 20px;
  }
`;

const ListsContainer = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: center;
  background: blue;
  background-color: white;
  // background-image: linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%);
  padding-block: 20px;
  gap: 100px;
`;
