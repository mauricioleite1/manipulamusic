import React, { useState, useRef } from 'react';
import {Search} from '@styled-icons/octicons/Search'
import { useAppSelector, useAppDispatch } from '../redux/app/hooks.ts';
import { setSearchResults } from '../redux/contentSlice';
import styled from 'styled-components';
import axios from 'axios';

const SearchBar = () => {
  const inputRef = useRef();
  const dispatch = useAppDispatch();

  const handleKeyDown = async ({ key }) => {
    const { value } = inputRef.current;

    if (key === 'Enter') {
      const response = await axios.get(`http://localhost:5000/search?q=${value}`);
      const data = response.data;
      dispatch(setSearchResults(data));
    }
  };

  return (
    <Container>
      <Search size="14" />
      <Input
        type="text"
        placeholder="Busque por um artista, álbum, etc..."
        ref={inputRef}
        onKeyDown={handleKeyDown}
      />
    </Container>
  )
}

export default SearchBar;

const Container = styled.div`
  align-items: center;
  // background: ;
  // border-radius: 28px;
  cursor: pointer;
  display: flex;
  flex: 0.5;
  justify-content: center;
  padding: 10px;
  transition: 0.2s ease-in-out;

  :hover {
    background: white;
  }
`;

const Input = styled.input`
  background: transparent;
  border: none;
  flex: 1;
  outline: none;
  padding-left: 10px;
  width: auto;
`;
