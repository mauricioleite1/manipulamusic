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
  cursor: pointer;
  display: flex;
  gap: 20px;
  margin-top: 40px;
`;

const ChartTrack = styled.div`
  align-items: flex-start;
  background-size: cover;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 4px 14px, rgba(0, 0, 0, 0.1) 0px 2px 8px;
  display: flex;
  flex-direction: column;
  height: 12rem;
  justify-content: flex-end;
  padding: 10px;
  transition: 0.2s ease;
  width: 12rem;

  :hover {
    opacity: 0.9;
  }

  h4, h6 {
    color: white;
    font-family: Inter, Outfit, sans-serif;
    font-size: 14px;
    font-weight: 600;
  }

  h6 {
    color: white;
    font-family: Inter, Outfit, sans-serif;
    font-size: 0.7rem;
    font-weight: 200;
  }
`;

