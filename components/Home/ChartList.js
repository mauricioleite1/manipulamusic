import React, { useRef } from 'react';
import { useAppSelector } from '../../redux/app/hooks.ts';
import styled from 'styled-components';
import { ArrowLeft } from '@styled-icons/octicons/ArrowLeft';
import { ArrowRight } from '@styled-icons/octicons/ArrowRight';



const ChartList = () => {
  const iRef = useRef()
  const chart = useAppSelector(state => state.content.chart);
  const results = useAppSelector(state => state.content.results);

  const myArrow = ({ type, onClick, isEdge }) => {
    const pointer = type === consts.PREV ? <ArrowLeft size={18} /> : <ArrowRight size={18} />
    return (
      <Button onClick={onClick} disabled={isEdge}>
        {pointer}
      </Button>
    )
  }

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
  flex-flow: row nowrap;
  gap: 10px;
  padding-block: 40px;
  overflow: hidden;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  width: 80%;
  margin: auto;
`;

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const ChartTrack = styled.div`
  align-items: flex-start;
  background-size: cover;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 8px;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  height: 12rem;
  justify-content: flex-end;
  padding: 10px;
  pointer-events: none;
  transition: 0.2s ease;
  scroll-snap-align: start;
  width: 16rem;

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

