import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../redux/app/hooks.ts';
import { Deezer } from '@styled-icons/fa-brands/Deezer'
import { FooterText } from '../language';
import * as socialIcon from '@styled-icons/entypo-social';
import Logo from './Logo';

const Footer = () => {
  const language = useAppSelector(state => state.userPreferences.language);
  const year = new Date().getFullYear();

  return (
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
