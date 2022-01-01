import axios from 'axios';
import styled from 'styled-components';
import Link from 'next/link';
import { useAppSelector, useAppDispatch } from '../redux/app/hooks.ts';
import { setChart, setGenreList } from '../redux/contentSlice';
import Hero from '../components/Home/Hero';
import { useEffect } from 'react';
import ChartListArtist from '../components/Home/ChartListArtist';
import GenreSection from '../components/Home/GenreSection';

export default function Home() {
  const chart = useAppSelector(state => state.content.chart);
  const genre = useAppSelector(state => state.content.genre);
  const results = useAppSelector(state => state.content.results);

  const dispatch = useAppDispatch();

  const getChart = async () => {
    const response = await axios.get('http://localhost:5000/chart');
    const data = response.data;
    dispatch(setChart(data));
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
          Artistas
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
          Álbuns
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
          Playlists
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

      { genre && <GenreSection /> }

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
  // gap: 10px;
  // background: purple;
  // width: 80rem;
  // margin-inline: auto;
`;

const ListsContainer = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: center;
  background: blue;
  background-color: #85FFBD;
  background-image: linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%);
  padding-block: 20px;
  gap: 60px;
  width: 100%;
`;
