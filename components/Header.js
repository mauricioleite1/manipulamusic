import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Globe } from '@styled-icons/octicons/Globe'
import { HeartFill } from '@styled-icons/octicons/HeartFill';
import { useAppSelector, useAppDispatch } from '../redux/app/hooks.ts';
import { setLanguage } from '../redux/userPreferencesSlice';
import Logo from './Logo';
import SearchBar from './SearchBar';

const Header = () => {
  const dispatch = useAppDispatch();
  const [showLanguageOptions, setShowLanguageOptions] = useState(false);

  const chooseLanguage = (lang) => {
    dispatch(setLanguage(lang));
    setShowLanguageOptions(false);
  };

  return (
    <Container>
      <Logo />
      <Link href="/favorites" passHref>
        <div>
          <HeartFill size={14}/>
          <h4>Favoritos</h4>
        </div>
      </Link>

      <SearchBar />

      <LanguageSelector>
        {showLanguageOptions && <div>
          <h5 onClick={() => chooseLanguage('en')}>
            English
          </h5>
          <h5>/</h5>
          <h5 onClick={() => chooseLanguage('ptBR')}>
            Português (Br)
          </h5>
        </div>}
        <Globe
          size="14"
          onClick={() => setShowLanguageOptions(!showLanguageOptions)}
          style={{ cursor: 'pointer' }}
        />
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
    position: absolute;
    border-radius: 28px;
    border-bottom: 1px solid grey;
    display: flex;
    gap: 10px;
    background: white;
    background: rgba(255 , 255, 255, 0.5);
    // backdrop-filter: blur(20px);
    padding: 2px 10px;
    top: 40px;
    right: 20px;

    h5 {
      cursor: pointer;
      font-weight: 400;

      :hover {
        font-weight: 600;
      }
    }
  }
`;
