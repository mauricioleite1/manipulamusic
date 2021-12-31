import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useAppSelector, useAppDispatch } from '../../redux/app/hooks.ts';

const Hero = () => {
  const chart = useAppSelector(state => state.content.chart);

  useEffect(() => {
    if (chart) {
      console.log(chart);
    }
  }, [chart])

  return (
    <Container>
      { chart ? <h2>As mais tocadas</h2> : <h2>Carregando...</h2> }

      <ChartList>
        { chart ? chart.tracks.data.map(track => (
          <ChartTrack key={track.id} style={{ backgroundImage: `url(${track.album.cover_xl})` }}>
            <h4>{track.title}</h4>
          </ChartTrack>
        )) : (
          <ChartTrack key={'id'} style={{ background: 'lightgrey' }} />
        )
        }
      </ChartList>
    </Container>
  );
};

export default Hero;

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
  height: 26rem;
  padding: 2rem;
  margin: auto;
  position: relative;
  overflow: hidden;

  h2 {
    color: white;
    font-weight: 500;
    letter-spacing: 0.2rem;
    position: absolute;
    top: 2rem;
  }
`;
  
const ChartList = styled.div`
  display: flex;
  gap: 30px;
  cursor: pointer;
  // background: red;
  padding-block: 10px;
  // width: 150vw;
`;

const ChartTrack = styled.div`
  background-size: cover;
  height: 14rem;
  width: 14rem;
  border-radius: 6px;
  transition: 0.2s ease;

  :hover {
    opacity: 0.9;
  }

  h4 {
    color: white;
    font-weight: 200;
    font-size: 14px;
    font-family: Inter, Outfit, sans-serif;
  }
`;

