import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useAppDispatch } from '../../redux/app/hooks.ts';
import { setArtistsByGenre } from '../../redux/contentSlice';
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
        style={{ backgroundImage: `linear-gradient(to top, rgba(100, 100, 100, 0.8) 50%, transparent), url(${picture})` }}
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
  border-radius: 18px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 15px 48px;
  transition: 0.2s ease-in-out;

  @media(max-width: 1024px) {
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
