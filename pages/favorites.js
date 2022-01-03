import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useAppSelector, useAppDispatch } from '../redux/app/hooks.ts';
import { ArrowLeft } from '@styled-icons/octicons/ArrowLeft';
import Track from '../components/Home/Track';

const Favorites = () => {
  const favorites = useAppSelector(state => state.userPreferences.favorites);
  
  return (
    <Page>
      <Breadcrumbs>
        <Link href="/" passHref>
          <ReturnButton>
            <ArrowLeft size={16} />Voltar
          </ReturnButton>
        </Link>
      </Breadcrumbs>

      <List>
        Sua lista de favoritos
        {favorites && favorites.map((favorite, index) => (
          <Track
            key={favorite.id}
            duration={favorite.duration}
            link={favorite.link}
            name={favorite.artist.name}
            preview={favorite.preview}
            result={favorite}
            title={favorite.title}
          />)
        )}
      </List>
    </Page>
  );
};

export default Favorites;

const Page = styled.section`
  align-items: flex-end;
  background-image:
    linear-gradient(
      233deg,
      #85FFBD 0%,
      #6667AB 100%
    );
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: flex-end;
  min-height: 76vh;
  position: relative;
`;

const List = styled.ul`
  align-items: center;
  display: flex;
  flex-direction column;
  gap: 8px;
  height: 50rem;
  list-style-type: none;
  margin: auto;
  overflow-x: hidden;
  overflow-y: scroll;
  padding-top: 2rem;
  position: relative;

  audio { height: 20px; }
`;

const ReturnButton = styled.div`
  cursor: pointer;
`;

const Breadcrumbs = styled.div`
  display: flex;
  gap: 20px;
  left: 10px;
  padding: 20px;
  position: absolute;
  top: 10px;
  width: 100%;
`;
