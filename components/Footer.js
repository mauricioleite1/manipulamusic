import React from 'react';
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
          <a href="https://www.deezer.com" target="_blank" rel="noreferrer"> <Deezer size={18} /> Deezer</a>
          <br></br>
        </h5>
      </Container>

      <MediaQuery query='(max-width: 800px)'>
        <NativeFooter>
          {/* <SearchBar /> */}
          <icon.Search size={28} color="#b1b1b1" />

          <Link href="/favorites" passHref>
          <Favorites>

            <icon.HeartFill size={28} color="#b1b1b1" />

            <MediaQuery query='(min-width: 1024px)'>
              <h5>Favoritos</h5>
            </MediaQuery>

          </Favorites>
        </Link>

        <icon.Globe size={28} color="#b1b1b1" />

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
`;

const Nav = styled.nav`
  align-items: center;
  border-radius: 28px;
  background: white;
  color: #1e1c22;
  display: flex;
  gap: 16px;
  padding: 4px 20px;
`;

const NativeFooter = styled.footer`
  background: white;
  border-top: 1px solid grey;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 3rem;
  position: sticky;
  bottom: 0;
  width: 100%;
  height: 4.5rem;
`;

const Favorites = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  gap: 4px;
`;
