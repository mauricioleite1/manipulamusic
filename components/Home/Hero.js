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
  background: whitesmoke;
  padding-block: 3.6rem;
  margin: auto;
  position: relative;
  overflow: hidden;
  width: 80rem;

  h2 {
    color: black;
    font-weight: 500;
    letter-spacing: 0.1rem;
    position: absolute;
    top: 2rem;
    background: #121FCF;
    background:
    linear-gradient(
      40deg,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(100, 100, 192,0.9) 46%,
      rgba(100, 200, 100,0.8) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

