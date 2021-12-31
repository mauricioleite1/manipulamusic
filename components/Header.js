import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import {Globe} from '@styled-icons/octicons/Globe'
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <Container>
      <LogoContainer>ManipulaMusic</LogoContainer>

      <SearchBar />
           
      <Nav>
        <Link href="/">Home</Link>
        <Link href="/">Sobre</Link>
        <Link href="/">Contato</Link>
      </Nav>

      <Globe size="14" />
    </Container>
  );
};

export default Header;

const Container = styled.header`
  align-items: center;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(26px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  display: flex;
  height: 3.2rem;
  justify-content: space-between;
  padding-inline: 40px;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 99;
`
const LogoContainer = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  // background: violet;
`;

const Nav = styled.nav`
  align-items: center;
  display: flex;
  justify-content: space-around;
  flex: 0.3;

  > a {
    font-size: 12px;
  }
`;
