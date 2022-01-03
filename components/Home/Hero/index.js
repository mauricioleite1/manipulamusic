import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../../redux/app/hooks.ts';
import LoadingSpinner from '../../LoadingSpinner';
import HeroList from './HeroList';

const Hero = () => {
  const chart = useAppSelector(state => state.content.chart);
  const results = useAppSelector(state => state.content.results);

  return (
    <Container>
      {chart
        ? <HeroList data={ results ? results : chart.tracks } />
        : <LoadingSpinner />
      }      
    </Container>
  );
};

export default Hero;

const Container = styled.div`
align-items: center;
color: grey;
display: flex;
justify-content: center;
min-height: 50vh;
width: 100%;

  h4 {
    font-weight: 300;
  }
`;
