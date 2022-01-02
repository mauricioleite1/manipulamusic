import React, { useState, useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Card from '../Card';
import { useAppSelector, useAppDispatch } from '../../redux/app/hooks.ts';
import { Heart } from '@styled-icons/octicons/Heart'
import { HeartFill } from '@styled-icons/octicons/HeartFill'
import { Deezer } from '@styled-icons/fa-brands/Deezer'
import { HomeText } from '../../language';
import { setResults } from '../../redux/contentSlice';

const HeroList = ({ data }) => {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(25);
  const language = useAppSelector(state => state.userPreferences.language);
  const resultsList = useAppSelector(state => state.content.resultsList);
  const searchInput = useAppSelector(state => state.content.search)
  const dispatch = useAppDispatch();

  // const top3 = (data.tracks.data.slice(0, 5));
  
  
  // const getMore = async () => {    
  //   const response = await axios.get(`http://localhost:5000/search?q=${searchInput}&index=${page}`);
  //   setLoading(true)
  //   dispatch(setResults([...resultsList, ...response.data.data]));
  //   setPage(page + 25)

  //   setLoading(false)
  // }

  const observer = useRef();
  const lastElement = useCallback(node => {
    if (loading) return
    if (observer.current) observer.current.disconnect
    observer.current = new IntersectionObserver(async (entries) => {
      if (entries[0].isIntersecting) {
        if (searchInput) {
          const response = await axios.get(`http://localhost:5000/search?q=${searchInput}&index=${page}`);
          setLoading(true)
          dispatch(setResults([...resultsList, ...response.data.data]));
          setPage(page + 25)
      
          setLoading(false)
        }
      }
    })
    if (node) observer.current.observe(node)
  }, [loading, resultsList, page, searchInput, dispatch]);

  const showTime = (duration) => {
    const hours = ~~(duration / 3600);
    const mins = ~~((duration % 3600) / 60);
    const secs = ~~duration % 60;

    let ret = "";
    if (hours > 0) { ret += "" + hours + ":" + (mins < 10 ? "0" : ""); }
    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
  }

  return (
    <Container>
      {/* <Top3>
        <Title>Top 5</Title>
        {data && top3.map(({ id, title, artist, album }) => (
          <Card
            key={id}
            mainText={title}
            secondaryText={artist.name}
            picture={album.cover_xl}
          />
        ))}
        </Top3> */}

      <List>
        <MaisTitle>
          {resultsList.length === 10
            ? HomeText.mostPlayed[language]
            : `Resultados de ${data.value}`
          }
          {/* <button onClick={getMore}>Click</button> */}
        </MaisTitle>

        {resultsList && resultsList.map(({ id, link, duration, position, title, artist, preview }, index) => {
          if (resultsList.length === index + 1) {
            return (
              <Track
                ref={lastElement}
                key={id}
              >
                <TrackTitle>
                  <h6>{position}</h6>
                  <Button><Heart size={10} /></Button>
                  <div>
                    <h5>{title}</h5>
                    <h6>{artist.name}</h6>
                  </div>
                  <h6>{showTime(duration)}</h6>

                </TrackTitle>
                <Preview>
                  <audio src={preview} controls>
                    <track kind="captions" />
                    O seu navegador não suporta o elemento <code>audio</code>.
                  </audio>
                  <a href={link} target="_blank" rel="noreferrer">
                    <Button>{HomeText.hearAtDeezer[language]} <Deezer size={18} /><strong>Deezer</strong></Button>
                  </a>
                </Preview>
              </Track>)
          }
          return (
            <Track
              key={id}
            >
              <TrackTitle>
                <h6>{position}</h6>
                <Button><Heart size={10} /></Button>
                <div>
                  <h5>{title}</h5>
                  <h6>{artist.name}</h6>
                </div>
                <h6>{showTime(duration)}</h6>

              </TrackTitle>
              <Preview>
                <audio src={preview} controls>
                  <track kind="captions" />
                  O seu navegador não suporta o elemento <code>audio</code>.
                </audio>
                <a href={link} target="_blank" rel="noreferrer">
                  <Button>{HomeText.hearAtDeezer[language]} <Deezer size={18} /><strong>Deezer</strong></Button>
                </a>
              </Preview>
            </Track>)
        }
        )}
      </List>
    </Container>
  )
}

export default HeroList;

const Preview = styled.div`
align-items: center;
justify-content: center;
  display: flex;
`;

const Container = styled.section`
align-items: center;
justify-content: center;
background: #6667ab;
background-image: linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%);
width: 100%;
padding-top: 4rem;

  display: flex;
  flex-flow: row wrap;
  gap: 40px;
`;

const Button = styled.button`
align-items: center;
justify-content: center;
  display: flex;
  gap: 4px;
border: none;
border-radius: 20px; 
cursor: pointer;
font-size: 12px;
padding: 4px 10px;
background: linear-gradient(220deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);

-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
font-weight: 600;
transition: 0.2s ease-in-out;
opacity: 0.6;

:hover { opacity: 1; }
`;

const Title = styled.h2`
background: #121FCF;
    background:
    linear-gradient(
      40deg,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(100, 200, 192,0.8) 46%,
      rgba(100, 200, 100,0.8) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 28px;
    font-weight: 700;
    left: 0;
    letter-spacing: 0.1rem;
    position: absolute;
    top: -2.5rem;
`;

const MaisTitle = styled(Title)`
position: absolute;
    top: 0;
    left: 0;
`;

const Top3 = styled.div`
  align-items: center;
  justify-content: center;
  cursor: pointer;
  display: flex;
  flex-flow: row wrap;
  gap: 10px;
  position: relative;
  margin: auto;
`;

const List = styled.ul`
  align-items: center;
  height: 21rem;
  display: flex;
  flex-direction column;
  overflow-y: scroll;
  gap: 8px;
  list-style-type: none;
  margin: auto;
  position: relative;
  padding-top: 2.5rem;
  overflow-x: hidden;

  audio {
    // background: whitesmoke;
    // width: 190px;
    height: 20px;
  }
`;

const Track = styled.li`
  align-items: center;
  border-radius: 40px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  border-bottom: 2px solid rgb( 250, 250, 250, 0.7);
  background-color: rgb( 250, 250, 250, 0.4);
  background-image: linear-gradient(43deg, rgba(65, 89, 208, 0.2) 0%, rgba(200, 80, 192, 0.3) 46%, rgba(255, 205, 112, 0.3) 100%);

  padding: 6px 16px;
  width: 60rem;

  h6 {
    color: grey;
    font-weight: 300;
  }

`;

const TrackTitle = styled.div`
  align-items: center;
  color: black;
  display: flex;
  gap: 10px;
  width: 30rem;

  h5 {
    color: rgb(57, 57, 57);
    font-weight: 600;
  }
`;