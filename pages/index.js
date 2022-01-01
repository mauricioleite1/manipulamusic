import axios from 'axios';
import styled from 'styled-components';
import Image from 'next/image';
import { useAppSelector, useAppDispatch } from '../redux/app/hooks.ts';
import { setChart } from '../redux/contentSlice';
import Hero from '../components/Home/Hero';
import { useEffect } from 'react';

export default function Home() {
  const chart = useAppSelector(state => state.content.chart);
  const results = useAppSelector(state => state.content.results);

  const dispatch = useAppDispatch();

  const getChart = async () => {
    const response = await axios.get('http://localhost:5000/chart');
    const data = response.data;
    dispatch(setChart(data));
  }

  useEffect(() => {
    getChart()
  }, [])

  return (
    <Page>
      <Hero />

      <ListsContainer>
        <ArtistsChart>
          Artistas
          {chart && chart.artists.data.map(artist => (
            <Artist key={artist.id}>
              <h5>{artist.position}</h5>
              <ArtistImage src={artist.picture_medium} alt="" width={26} height={26} />
              <h5>{artist.name}</h5>
            </Artist>
          ))}
        </ArtistsChart>

        <ArtistsChart>
          Álbuns
          {chart && chart.albums.data.map(album => (
            <Artist key={album.id}>
              <h5>{album.position}</h5>
              <ArtistImage src={album.cover_medium} alt="" width={26} height={26} />
              <div>
                <h5>{album.title}</h5>
                <h6>{album.artist.name}</h6>
              </div>
            </Artist>
          ))}
        </ArtistsChart>

        <ArtistsChart>
          Artistas
          {chart && chart.artists.data.map(artist => (
            <Artist key={artist.id}>
              <h5>{artist.position}</h5>
              <ArtistImage src={artist.picture_medium} alt="" width={26} height={26} />
              <h5>{artist.name}</h5>
            </Artist>
          ))}
        </ArtistsChart>


      </ListsContainer>


    </Page>
  );
};

const Page = styled.div`
  background: white;
  margin: auto;
  height: 120vh;
  // width: 80rem;

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

const Artist = styled.div`
// background: #6667ab;
  align-items: center;
  display: flex;
  gap: 6px;
  border-radius: 28px;
  width: 22rem;
  height: 40px;
  // border: 1px solid lightgrey;
  padding: 8px;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  :hover {
    background: rgba(255, 255, 255, 0.8);
  }
`;

const ArtistImage = styled(Image)`
  border-radius: 50%;
`;

const ListsContainer = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: center;
  background: blue;
  background-color: #85FFBD;
  background-image: linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%);
  padding-block: 20px;
  gap: 20px;
  width: 100%;
`;
