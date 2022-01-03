import React from 'react';
import styled from 'styled-components';
import { useAppSelector, useAppDispatch } from '../../redux/app/hooks.ts';
import { GeneralText } from '../../language';
import LoadingSpinner from './LoadingSpinner';
import HeroList from './HeroList';

const Hero = () => {
  const chart = useAppSelector(state => state.content.chart);
  const results = useAppSelector(state => state.content.results);
  const language = useAppSelector(state => state.userPreferences.language);

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

  h4 {
    font-weight: 300;
  }
`;
