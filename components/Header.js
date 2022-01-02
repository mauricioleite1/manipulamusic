import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import {Globe} from '@styled-icons/octicons/Globe'
import SearchBar from './SearchBar';
import Logo from './Logo';
import { useAppDispatch } from '../redux/app/hooks.ts';
import { setLanguage } from '../redux/userPreferencesSlice';

const Header = () => {
  const dispatch = useAppDispatch();

  return (
    <Container>
      <Logo />

      <SearchBar />
      
      <LanguageSelector>
        <div>
          <h5 onClick={() => dispatch(setLanguage('en'))}>
            English
          </h5>
          <h5>/</h5>
          <h5 onClick={() => dispatch(setLanguage('ptBR'))}>
            Português (Br)
          </h5>
        </div>
        <Globe size="14" />
      </LanguageSelector>
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

const LanguageSelector = styled.div`
align-items: center;
  display: flex;
  gap: 10px;

  div {
    border-radius: 28px;
    display: flex;
    gap: 10px;
    background: white;
    padding: 2px 10px;

    h5 {
      cursor: pointer;
      font-weight: 400;

      :hover {
        font-weight: 600;
      }
    }
  }
`;
