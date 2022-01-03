import React from "react";
import styled from "styled-components";
import Link from "next/link";
import MediaQuery from "react-responsive";
import { HeartFill } from "@styled-icons/octicons/HeartFill";
import { useAppSelector } from "../redux/app/hooks.ts";
import { GeneralText } from "../language";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import LanguageSelector from "./LanguageSelector";

const Header = () => {
  const language = useAppSelector((state) => state.userPreferences.language);

  return (
    <Container>
      <Logo />

      <MediaQuery query="(min-width: 800px)">
        <SearchBar />

        <FavoritesWrapper style={{ display: "flex", gap: "40px" }}>
          <Link href="/favorites" passHref>
            <Favorites>
              <HeartFill size={14} />
              <h5>{GeneralText.favorites[language]}</h5>
            </Favorites>
          </Link>

          <LanguageSelector />
        </FavoritesWrapper>
      </MediaQuery>
      
    </Container>
  );
};

export default Header;

const Container = styled.header`
  align-items: center;
  background: rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(26px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  height: 3.2rem;
  justify-content: space-between;
  padding-inline: 3rem;
  position: sticky;
  top: 0;
  z-index: 99;

  @media (max-width: 800px) {
    background-color: white;
    flex-flow: row wrap;
    height: auto;
    padding: 10px;
  }
`;

const Favorites = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  gap: 4px;
`;

const FavoritesWrapper = styled.div`
  display: flex;
  gap: 4px;
`;
