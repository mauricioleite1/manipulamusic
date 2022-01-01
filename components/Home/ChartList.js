import React from 'react';
import { useAppSelector } from '../../redux/app/hooks.ts';
import styled from 'styled-components';


const ChartList = () => {
  const chart = useAppSelector(state => state.content.chart);
  const results = useAppSelector(state => state.content.results);

  return (
    <Container>
      {chart ? chart.tracks.data.map(track => (
        <ChartTrack
          key={track.id} 
          style={{ 
            backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.9) 5%, transparent 35%), url(${track.album.cover_xl})`
          }}
        >
          <h4>{track.title}</h4>
          <h6>{track.artist.name}</h6>

        </ChartTrack>
      )) : (
        <ChartTrack key={'id'} style={{ background: 'lightgrey' }} />
      )}
    </Container>
  )
}

export default ChartList;


const Container = styled.div`
  display: flex;
  gap: 20px;
  cursor: pointer;
  // background: red;
  padding-block: 10px;
  // width: 150vw;
`;

const ChartTrack = styled.div`
  background-size: cover;
  align-items: flex-start;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 4px 14px, rgba(0, 0, 0, 0.1) 0px 2px 8px;
  justify-content: flex-end;
  display: flex;
  flex-direction: column;
  height: 16rem;
  width: 16rem;
  border-radius: 8px;
  transition: 0.2s ease;
  padding: 10px;

  :hover {
    opacity: 0.9;
  }

  h4, h6 {
    color: white;
    font-weight: 600;
    font-size: 14px;
    font-family: Inter, Outfit, sans-serif;
  }

  h6 {
    color: white;
    font-weight: 200;
    font-size: 0.7rem;
    font-family: Inter, Outfit, sans-serif;
  }
`;

