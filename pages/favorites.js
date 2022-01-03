import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../redux/app/hooks.ts';
import HeroList from '../components/Home/HeroList';
import Track from '../components/Home/Track';

const FavoritesPage = () => {
  const favorites = useAppSelector(state => state.userPreferences.favorites)
  

  console.log(favorites);

  return (
    <Page>

      <List>
        Sua lista de favoritos
        {favorites.map((result, index) => (
          <Track
            key={result.id}
            duration={result.duration}
            // lastElement={lastElement}
            link={result.link}
            name={result.artist.name}
            // position={result.position}
            preview={result.preview}
            result={result}
            title={result.title}
          />
        ))}
      </List>
    </Page>
  );
};

export default FavoritesPage;

const Page = styled.section`
  align-items: center;
  background-image: linear-gradient(210deg, #6667ab 0%, #FFFB7D 100%);
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: 76vh;
  justify-content: center;
  min-height: 70vh;
  overflow: auto;
`;

const List = styled.ul`
  align-items: flex-start;
  display: flex;
  flex-direction column;
  gap: 8px;
  list-style-type: none;
  margin: auto;
  overflow-x: hidden;
  overflow-y: scroll;
  position: relative;
  padding-top: 2.5rem;

  audio { height: 20px; }
`;
