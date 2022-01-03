import { useEffect } from 'react';
import styled from 'styled-components';
import { useAppSelector, useAppDispatch } from '../redux/app/hooks.ts';
import { initialInfo } from '../services';
import Hero from '../components/Home/Hero';
import GenreSection from '../components/Home/GenreSection';
import ListsSection from '../components/Home/Lists';

export default function Home() {
  const dispatch = useAppDispatch();
  const genre = useAppSelector(state => state.content.genre);
  const results = useAppSelector(state => state.content.genre);

  useEffect(() => {
    if (!results || results >= 10) {
      initialInfo(dispatch);
    }
  }, [dispatch])

  return (
    <Page>
      <Hero />
      <ListsSection />
      {genre && <GenreSection />}
    </Page>
  );
};

const Page = styled.div`
  background: white;
  margin: auto;

  h5 {
    font-family: Inter;
    font-weight: 400;
  }
`;
