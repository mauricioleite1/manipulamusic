import React, { useState } from 'react';
import styled from 'styled-components';
import { ArrowDown } from '@styled-icons/octicons/ArrowDown';
import { ArrowUp } from '@styled-icons/octicons/ArrowUp';
import { useAppSelector } from '../../redux/app/hooks.ts';
import Genre from './Genre';

const GenreSection = () => {
  const [showMore, setShowMore] = useState(false);
  const genre = useAppSelector(state => state.content.genre);

  return (
    <Container>
      Explorar
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
      
      <button onClick={() => setShowMore(!showMore)}>
        {!showMore ? <ArrowDown size={20} /> : <ArrowUp size={20} />}
      </button>

    </Container>
  );
};

export default GenreSection;

const Container = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  margin: auto;
  padding: 30px;
  width: 65%;

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
  height: 100px;
  overflow: hidden;
`;
