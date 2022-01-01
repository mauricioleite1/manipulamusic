import React from 'react';
import styled from 'styled-components';
import { MarkGithub } from '@styled-icons/octicons/MarkGithub';
import * as socialIcon from '@styled-icons/entypo-social';
// import {Linkedin} from '@styled-icons/entypo-social/Linkedin';
// import {Instagram} from '@styled-icons/entypo-social/Instagram';
import {Deezer} from '@styled-icons/fa-brands/Deezer'

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Container>
      <TopSection>
        Links e etc
      </TopSection>

      <Info>
        ManipulaMusicLogo


        <Nav>
          <a href="https://www.linkedin.com/in/mauricioleite" target="_blank" rel="noreferrer">
            <socialIcon.Linkedin size={18} />
          </a>
          <a href="https://www.github.com/mauricioleite1" target="_blank" rel="noreferrer">
            <socialIcon.Github size={18} />
          </a>
          <a href="https://www.instagram.com/mauricioleite1" target="_blank" rel="noreferrer">
            <socialIcon.Instagram size={18} />
          </a>
        </Nav>
        <h5>
          {year}. Maurício Leite<br></br> Conteúdo fornecido por
          <a href="https://www.deezer.com" target="_blank" rel="noreferrer"> <Deezer size={18} /> Deezer</a>
        </h5>
      </Info>

    </Container>
  )
}

export default Footer;

const Container = styled.footer`
  align-items: center;
  background: var(--footer-bg);
  border-top: 1px solid #3e4143;
  color: whitesmoke;
  display: flex;
  flex-direction: column;
  height: 18rem;
  justify-content: space-between;
  padding: 1rem 4rem;
  
  h5 {
    text-align: right;
    font-family: Inter;
    font-size: 12px;
    font-weight: 200;
  }
`;

const TopSection = styled.section`
  // height: 100%;
  width: 100%;
  background-color: purple;
`;

const Nav = styled.nav`
  align-items: center;
  border-radius: 28px;
  background: white;
  color: var(--footer-bg);
  display: flex;
  gap: 16px;
  padding: 4px 20px;
`;

const Info = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;