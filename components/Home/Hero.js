import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useAppSelector, useAppDispatch } from '../../redux/app/hooks.ts';
import ChartList from './ChartList';

const Hero = () => {
  const chart = useAppSelector(state => state.content.chart);
  const results = useAppSelector(state => state.content.results);

  useEffect(() => {
    if (chart) {
      console.log(chart);
    }
  }, [chart])

  return (
    <Container>
      { chart ? <h2>As mais tocadas</h2> : <h2>Carregando...</h2> }
      <ChartList />
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
    letter-spacing: 0.1rem;
    position: absolute;
    top: 2rem;
  }
`;

