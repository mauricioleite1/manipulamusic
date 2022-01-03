import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" passHref>
      <Container>
        manipula<strong>music</strong>
      </Container>
    </Link>
  );
};

export default Logo;

const Container = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  letter-spacing: 0.1rem;
  justify-content: center;
  padding: 1rem;
  transition: 0.2s ease-in-out;

  :hover {
    opacity: 0.8;
  }

  @media(max-width: 800px) {
    text-align: center;
    width: 100vw;
    // background: red;
  }
`;
