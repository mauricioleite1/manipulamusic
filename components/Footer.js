import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useAppSelector } from '../redux/app/hooks.ts';
import { Deezer } from '@styled-icons/fa-brands/Deezer'
import { FooterText } from '../language';
import * as socialIcon from '@styled-icons/entypo-social';
import Logo from './Logo';
import * as icon from '@styled-icons/octicons';

import MediaQuery from "react-responsive";
import SearchBar from './SearchBar';

const Footer = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const language = useAppSelector(state => state.userPreferences.language);
  const year = new Date().getFullYear();

  return (
    <>
      <Container>
        <Logo />

        <Nav>
          <a href="https://www.linkedin.com/in/mauricioleite" target="_blank" rel="noreferrer">
            <socialIcon.Linkedin size={16} />
          </a>
          <a href="https://www.github.com/mauricioleite1" target="_blank" rel="noreferrer">
            <socialIcon.Github size={16} />
          </a>
          <a href="https://www.instagram.com/mauricioleite1" target="_blank" rel="noreferrer">
            <socialIcon.Instagram size={16} />
          </a>
        </Nav>
        <h5>
          {FooterText.developed[language]} {year}
          <br></br>
          {FooterText.iDoNotOwn[language]}
          <a href="https://www.deezer.com" target="_blank" rel="noreferrer">
            <Deezer size={18} color="white" /> Deezer
          </a>
          <br></br>
        </h5>
      </Container>


      <MediaQuery query='(max-width: 800px)'>
        <NativeFooter>
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

            <icon.Globe size={24} color="#6f6f6f" />

          </div>

        </NativeFooter>
      </MediaQuery>
    </>
  )
}

export default Footer;

const Container = styled.footer`
  align-items: center;
  background: #1e1c22;
  border-top: 4px solid #ff9811;
  color: whitesmoke;
  display: flex;
  flex-direction: column;
  height: 13rem;
  justify-content: space-between;
  padding-inline: 20rem;
  padding-block: 2.5rem 1rem;
  
  h5 {
    text-align: center;
    font-family: Inter;
    font-size: 12px;
    font-weight: 200;
  }

  a {
    color: white;
  }

  @media(max-width: 1024px) {
    padding: 1.6rem 4rem;
  }
`;

const Nav = styled.nav`
  align-items: center;
  border-radius: 28px;
  background: white;
  color: #1e1c22;
  display: flex;
  gap: 16px;
  padding: 4px 20px;

  a {
    color: #1e1c22;
  }
`;

const NativeFooter = styled.footer`
  align-items: center;
  background: white;
  bottom: 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  position: fixed;
  // padding-top: 1rem;
  width: 100%;
  overflow-x: hidden;
  z-index: 99;

  div {
    align-items: inherit;
    display: flex;
    width: inherit;
    justify-content: space-between;
    padding: 1.5rem 2rem;
  }
`;

const Favorites = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  gap: 4px;
`;
