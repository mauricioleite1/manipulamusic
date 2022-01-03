import React, { useRef } from "react";
import axios from "axios";
import styled from "styled-components";
import { Search } from "@styled-icons/octicons/Search";
import { useAppSelector, useAppDispatch } from "../redux/app/hooks.ts";
import { setSearchResults, setResults, setSearchInput } from "../redux/contentSlice";
import { setIsLoading } from "../redux/pageSlice";
import { HeaderText } from "../language";

function SearchBar() {
  const inputRef = useRef();
  const language = useAppSelector((state) => state.userPreferences.language);
  const dispatch = useAppDispatch();

  const handleKeyDown = async ({ key }) => {
    const { value } = inputRef.current;

    if (key === "Enter") {
      dispatch(setIsLoading(true));
      const response = await axios.get(
        `http://localhost:5000/search?q=${value}&index=0`
      );
      const data = response.data;

      dispatch(setSearchResults(data));
      dispatch(setResults(data.data));
      dispatch(setSearchInput(value));
      dispatch(setIsLoading(false));
    }
  };

  return (
    <Container>
      <Search size="14" />
      <Input
        type="text"
        placeholder={HeaderText.searchPlaceholder[language]}
        ref={inputRef}
        onKeyDown={handleKeyDown}
      />
    </Container>
  );
}

export default SearchBar;

const Container = styled.div`
  align-items: center;
  border-radius: 28px;
  cursor: pointer;
  display: flex;
  flex: 0.5;
  justify-content: center;
  padding: 10px;
  transition: 0.2s ease-in-out;

  :hover {
    background: white;
  }

  @media (max-width: 1024px) {
    background: white;
    border-radius: 0;
    flex: 1;
    height: 20px;
    padding-inline: 100px;
    width: 2rem;
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
