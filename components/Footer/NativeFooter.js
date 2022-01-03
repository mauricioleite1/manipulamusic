import React, { useState } from "react";
import styled from 'styled-components';
import * as icon from '@styled-icons/octicons';
import Link from 'next/link';
import SearchBar from "../SearchBar";
import { setLanguage } from '../../redux/userPreferencesSlice';
import { useAppDispatch } from '../../redux/app/hooks.ts';

const NativeFooter = () => {
  const dispatch = useAppDispatch();
  const [showSearchBar, setShowSearchBar] = useState(false);
  const chooseLanguage = (lang) => dispatch(setLanguage(lang));

  return (
    <Container>
      {showSearchBar && <SearchBar />}

      <div>
        <Link href="/" passHref>
          <icon.HomeFill size={24} color="#6f6f6f" />
        </Link>

        <icon.Search
          size={24}
          color="#6f6f6f"
          onClick={() => setShowSearchBar(!showSearchBar)}
        />

        <Link href="/favorites" passHref>
          <icon.HeartFill size={24} color="#6f6f6f" />
        </Link>

        <icon.Globe
          size={24}
          color="#6f6f6f"
          onClick={() => {
            if (language === "en") {
              chooseLanguage("ptBR");
              localStorage.setItem("language", "ptBR");
            } else {
              chooseLanguage("en");
              localStorage.setItem("language", "en");
            }
          }}
        />
      </div>
    </Container>
  );
};

export default NativeFooter;

const Container = styled.footer`
  align-items: center;
  background: white;
  bottom: 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  position: fixed;
  overflow-x: hidden;
  width: 100%;
  z-index: 99;

  div {
    align-items: inherit;
    display: flex;
    justify-content: space-between;
    padding: 1.5rem 2rem;
    width: inherit;
  }
`;

const Favorites = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  gap: 4px;
`;

