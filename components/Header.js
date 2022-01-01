import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import {Globe} from '@styled-icons/octicons/Globe'
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <Container>
      <Link href="/" passHref>
        <LogoContainer>manipula<strong>music</strong></LogoContainer>
      </Link>

      <SearchBar />

      <Globe size="14" />
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
  width: 100%;
  z-index: 99;
`
const LogoContainer = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  letter-spacing: 0.1rem;
  background: rgba(255, 255, 255, 0.5);
  padding: 1rem;
`;
