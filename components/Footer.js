import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Deezer } from '@styled-icons/fa-brands/Deezer'
import * as socialIcon from '@styled-icons/entypo-social';
import Logo from './Logo';

const Footer = () => {
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
        Desenvolvido por Maurício Leite. {year}
        <br></br>
        Não possuo direitos sobre o conteúdo utilizado aqui. Todo conteúdo é fornecido por
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
  padding-block: 1rem 1rem;
  
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
