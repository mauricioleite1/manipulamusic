import React from 'react';
import styled from 'styled-components';
import { useAppSelector, useAppDispatch } from '../../redux/app/hooks.ts';
import HeroList from './HeroList';

const Hero = () => {
  const chart = useAppSelector(state => state.content.chart);
  const language = useAppSelector(state => state.userPreferences.language);

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
  // padding-top: 4rem;
  color: grey;
  h2 {
    
  }
`;

