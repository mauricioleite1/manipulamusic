import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useAppDispatch } from '../../redux/app/hooks.ts';
import { setArtistsByGenre } from '../../redux/contentSlice';
import Card from '../Card';
import Link from 'next/link';

const Genre = ({ id, name, picture }) => {
  const dispatch = useAppDispatch();

  const handleClick = async () => {
    const response = await axios.get(`http://localhost:5000/genre/${id}`);
    const data = response.data;
    dispatch(setArtistsByGenre(data.data));
  }

  return (
    <Link href={ `/genre/${id}` } passHref>
      <Container
        style={{ backgroundImage: `linear-gradient(45deg, rgba(0, 0, 0, 0.4) 25%, transparent), url(${picture})` }}
        onClick={handleClick}
      >
        <h4>{name}</h4>
      </Container>
    </Link>
  );
};

export default Genre;

const Container = styled.div`
  align-items: center;
  background-size: cover;
  // background-position-y: 210px;
  border-radius: 18px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 10px 48px;
  transition: 0.2s ease-in-out;

  @media(max-width: 1024px) {
    width: 100vw:
    padding-inline: 10px;
  }

  :hover {
    opacity: 0.8;
  }

  h4 {
    color: white;
    font-weight: 400;
  }
`;
