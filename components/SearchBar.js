import React from 'react';
import styled from 'styled-components';
import {Search} from '@styled-icons/octicons/Search'

const SearchBar = () => {
  return (
    <Container>
      <Search size="14" />
      <Input
        type="text"
        placeholder="Busque por um artista, álbum, etc..."
      />
    </Container>
  )
}

export default SearchBar;

const Container = styled.div`
  align-items: center;
  background: white;
  border-radius: 28px;
  display: flex;
  flex: 0.5;
  justify-content: center;
  padding: 10px;
`;

const Input = styled.input`
  border: none;
  flex: 1;
  outline: none;
  padding-left: 10px;
  width: auto;
`;
