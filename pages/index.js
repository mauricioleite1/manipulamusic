import axios from 'axios';
import styled from 'styled-components';
import Link from 'next/link';
import { useAppSelector, useAppDispatch } from '../redux/app/hooks.ts';
import { setChart } from '../redux/contentSlice';
import Hero from '../components/Home/Hero';
import { useEffect } from 'react';
import ChartListArtist from '../components/Home/ChartListArtist';

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
          {chart &&
            chart.artists.data.map(({ id, position, picture_medium, name, link }) => (
              <ChartListArtist
                position={position}
                link={link}
                mainText={name}
                image={picture_medium}
                key={id}
              />
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
