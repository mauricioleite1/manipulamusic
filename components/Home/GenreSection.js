import React, { useState } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../redux/app/hooks.ts';
import Genre from './Genre';
import { GenreSectionText } from '../../language';

const GenreSection = () => {
  const [showMore, setShowMore] = useState(false);
  const genre = useAppSelector(state => state.content.genre);
  const language = useAppSelector(state => state.userPreferences.language);

  return (
    <Container>
      {GenreSectionText.explore[language]}
      <List style={{ height: showMore && 'auto' }}>
        {genre && genre.map(({ id, name, picture_big }) => (
          <Genre
            key={id}
            id={id}
            name={name}
            picture={picture_big}
          />
        ))}
      </List>
    </Container>
  );
};

export default GenreSection;

const Container = styled.section`
  align-items: center;
  background: #d4d4d4;
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  margin: auto;
  padding: 100px;
  width: 100%;

  @media(max-width: 1024px) {
    // display: none;
  }

  button {
    background: lightgrey;
    border: none;
    border-radius: 50%;
    color: grey;
    cursor: pointer;
    padding: 10px;
  }

`;

const List = styled.section`
  align-items: center;
  display: flex;
  flex-flow: row wrap;
  gap: 14px;
  justify-content: center;
  overflow: hidden;

  @media(max-width: 1024px) {
    gap: 10px;
  }
`;
