import React from 'react';
import styled from 'styled-components';
import { useAppSelector, useAppDispatch } from '../../redux/app/hooks.ts';
import { GeneralText } from '../../language';
import HeroList from './HeroList';

const Hero = () => {
  const chart = useAppSelector(state => state.content.chart);
  const results = useAppSelector(state => state.content.results);
  const language = useAppSelector(state => state.userPreferences.language);

  return (
    <Container>
      {chart
        ? <HeroList data={ results ? results : chart.tracks } />
        : <h2>{GeneralText.loading[language]}</h2>
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

