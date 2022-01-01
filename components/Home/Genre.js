import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useAppDispatch } from '../../redux/app/hooks.ts';
import { setArtistsByGenre } from '../../redux/contentSlice';

const Genre = ({ id, name, picture }) => {
  const dispatch = useAppDispatch();

  const handleClick = async () => {
    const response = await axios.get(`http://localhost:5000/genre/${id}`);
    const data = response.data;
    dispatch(setArtistsByGenre(data.data));
  }

  return (
    <Container
      style={{ backgroundImage: `url(${picture})` }}
      onClick={handleClick}
    >
      <h4>{name}</h4>
    </Container>
  );
};

export default Genre;

const Container = styled.div`
  align-items: center;
  background-size: cover;
  background-position-y: 210px;
  border-radius: 18px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 18px 88px;
  transition: 0.2s ease-in-out;

  :hover {
    opacity: 0.8;
  }

  h4 {
    color: white;
    font-weight: 400;
  }
`;
