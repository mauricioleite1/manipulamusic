import React from 'react'
import styled from 'styled-components';
import { useAppSelector, useAppDispatch } from '../../redux/app/hooks.ts';
import { setFavorites } from '../../redux/userPreferencesSlice';
import { HomeText } from '../../language';
import { Deezer } from '@styled-icons/fa-brands/Deezer';
import { convertTime } from '../../services';
import FavoriteButton from '../FavoriteButton';

const Track = ({ result, position = '', title, link, name, duration, preview, lastElement = '', isLast = null }) => {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(state => state.userPreferences.favorites);
  const language = useAppSelector(state => state.userPreferences.language);
  const cond = () => { if (isLast) { return lastElement } }

  const addNewFavorite = () => {
    const isFavorite = favorites.find(favorite => result.id === favorite.id);

    if (!isFavorite) {
      dispatch(setFavorites([...favorites, result]));
      localStorage.setItem('favorites', JSON.stringify([...favorites, result]));
    } else {
      const removedItem = favorites.filter(favorite => result.id !== favorite.id);
      dispatch(setFavorites(removedItem));
      localStorage.setItem('favorites', JSON.stringify(removedItem));
    }
  }

  return (
    <Container ref={cond()}>
      <TrackTitle>
        <h6>{position}</h6>
        <FavoriteButton onClick={addNewFavorite} result={result} />
        <div>
          <h5>{title}</h5>
          <a href={link} alt="" target="_blank" rel="noreferrer">
            <h6>{name}</h6>
          </a>
        </div>
        <h6>{convertTime(duration)}</h6>
      </TrackTitle>

      <Preview>
        <audio src={preview} controls>
          <track kind="captions" />
          {HomeText.cantReproduce[language]} <code>audio</code>.
        </audio>
        <a href={link} target="_blank" rel="noreferrer">
          <DeezerButton>{HomeText.hearAtDeezer[language]} <Deezer size={18} /><strong>Deezer</strong></DeezerButton>
        </a>
      </Preview>
    </Container>
  );
};

export default Track;

const Container = styled.li`
  align-items: center;
  background-color: rgb( 250, 250, 250, 0.4);
  background-image: 
    linear-gradient(
      43deg, rgba(255, 255, 208, 0.4) 0%,
      rgba(200, 80, 192, 0.3) 46%,
      rgba(255, 205, 112, 0.3) 100%
    );
  border-bottom: 3px solid rgb(250, 250, 250, 0.6);
  border-radius: 40px;
  display: flex;
  gap: 10px;
  justify-content: space-between;
  padding: 6px 16px;
  width: 60rem;

  h6 {
    color: #1d1d1d;
    font-weight: 300;
  }
`;

const TrackTitle = styled.div`
  align-items: center;
  color: black;
  display: flex;
  gap: 10px;
  width: 30rem;

  h5 {
    color: rgb(57, 57, 57);
    font-weight: 600;
  }
`;

const Preview = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

const DeezerButton = styled.button`
  align-items: center;
  background: linear-gradient(220deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
  border: none;
  border-radius: 20px; 
  cursor: pointer;
  display: flex;
  font-size: 12px;
  font-weight: 600;
  gap: 4px;
  justify-content: center;
  opacity: 0.6;
  padding: 4px 10px;
  transition: 0.2s ease-in-out;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  :hover {
    opacity: 1;
  }
`;
