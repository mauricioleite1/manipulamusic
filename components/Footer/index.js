import React from 'react';
import styled from 'styled-components';
import { Deezer } from '@styled-icons/fa-brands/Deezer'
import MediaQuery from "react-responsive";
import { useAppSelector } from '../../redux/app/hooks.ts';
import { FooterText } from '../../language';
import { navOptions } from '../../services';
import Logo from '../Logo';
import NativeFooter from './NativeFooter';

function Footer() {
  const language = useAppSelector(state => state.userPreferences.language);
  const year = new Date().getFullYear();
    
  return (
    <>
      <Container>
        <Logo />
        <Nav>
          {navOptions.map(({href, icon}) => (
            <a href={href} target="_blank" rel="noreferrer">
              {icon}
            </a>
          ))}
        </Nav>
        <h5>
          {FooterText.developed[language]} {year}
          <br />
          {FooterText.iDoNotOwn[language]}
          <a href="https://www.deezer.com" target="_blank" rel="noreferrer">
            <Deezer size={18} color="white" /> Deezer
          </a>
          <br />
        </h5>
      </Container>
      
      <MediaQuery query='(max-width: 800px)'>
        <NativeFooter />
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
  padding-block: 2.5rem 1rem;
  padding-inline: 20rem;
  
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
