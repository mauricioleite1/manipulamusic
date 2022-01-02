import React from 'react';
import styled from 'styled-components';
import { useAppSelector, useAppDispatch } from '../../redux/app/hooks.ts';
import HeroList from './HeroList';

const Hero = () => {
  const chart = useAppSelector(state => state.content.chart);

  return (
    <Container>
      { chart ? <h2>As mais tocadas</h2> : <h2>Carregando...</h2> }
      <HeroList data={chart} />
    </Container>
  );
};

export default Hero;

const Container = styled.div`
  padding: 80px;

  h2 {
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
    font-size: 28px;
    font-weight: 700;
    left: 13rem;
    letter-spacing: 0.1rem;
    position: absolute;
    top: 7rem;
  }
`;

