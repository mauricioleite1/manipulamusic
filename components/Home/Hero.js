import React from 'react';
import styled from 'styled-components';
import { useAppSelector, useAppDispatch } from '../../redux/app/hooks.ts';
import HeroList from './HeroList';

const Hero = () => {
  const chart = useAppSelector(state => state.content.chart);

  return (
    <Container>
      {chart
        ? <HeroList data={chart} />
        : <h2>Carregando...</h2>
      }
    </Container>
  );
};

export default Hero;

const Container = styled.div`
  padding: 4rem;

  h2 {
    
  }
`;

