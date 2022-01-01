import React, { useState } from 'react';
import styled from 'styled-components';
import { ArrowDown } from '@styled-icons/octicons/ArrowDown';
import { ArrowUp } from '@styled-icons/octicons/ArrowUp';
import { useAppSelector } from '../../redux/app/hooks.ts';

const GenreSection = () => {
  const [showMore, setShowMore] = useState(false);
  const genre = useAppSelector(state => state.content.genre);

  return (
    <Container>
      Gêneros
      <List style={{ height: showMore && 'auto' }}>
        {genre && genre.map(({ id, name, picture_big }) => (
          <Genre
            key={id}
            style={{ backgroundImage: `url(${picture_big})` }}
          >
            <h4>{name}</h4>
          </Genre>
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
  width: 70%;

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
  gap: 10px;
  justify-content: center;
  height: 210px;
  overflow: hidden;
`;

const Genre = styled.div`
  align-items: center;
  background-size: cover;
  background-position-y: 210px;
  border-radius: 18px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 28px 148px;
  transition: 0.2s ease-in-out;

  :hover {
    opacity: 0.8;
  }

  h4 {
    color: white;
    font-weight: 400;
  }
`;
