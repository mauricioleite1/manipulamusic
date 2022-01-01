import React, { useState } from 'react';
import { LinkExternal } from '@styled-icons/octicons/LinkExternal'
import Image from 'next/image';
import styled from 'styled-components';

const ChartListArtist = ({ position, link, mainText, secondaryText = null, image }) => {
  const [showExternalIcon, setShowExternalIcon] = useState(false);

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      onMouseOver={() => setShowExternalIcon(true)}
      onMouseOut={() => setShowExternalIcon(false)}
    >
      <Container>
        <PositionText>{position}</PositionText>
        <ArtistImage src={image} alt="" width={26} height={26} />

        <div>
          <h5>{mainText}</h5>
          {secondaryText && <h6>{secondaryText}</h6>}
        </div>

        {/* {showExternalIcon && } */}
        {showExternalIcon && (
          <ExtraInfo>
            <ArtistImage src={image} alt="" width={200} height={200} />
            <ArtistText>
              {mainText}

            </ArtistText>
            <h6>
              Abrir em Deezer
              <LinkExternal size={12} />
            </h6>
          </ExtraInfo>
        )}
      </Container>
    </a>
  )
}

export default ChartListArtist;

const Container = styled.div`
  align-items: center;
  border-radius: 28px;
  cursor: pointer;
  display: flex;
  gap: 6px;
  height: 40px;
  padding: 8px;
  position: relative;
  transition: 0.2s ease-in-out;
  width: 18rem;

  :hover {
    background: rgba(255, 255, 255, 0.8);
  }
`;

const ArtistImage = styled(Image)`
  border-radius: 50%;
`;

const PositionText = styled.h5`
  color: grey;
  font-size: 10px;
  text-align: right;
  width: 10px;
`;

const ExtraInfo = styled.div`
  backdrop-filter: blur(18px);
  background: rgba(255, 255, 255, 0.4);
  border-radius: 28px;
  border-top: 1px solid whitesmoke;
  border-left: 1px solid whitesmoke;
  bottom: 3rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  left: 14rem;
  position: absolute;
  padding: 2.5rem;
  width: max-content;
  z-index: 99;

  h6 {
    align-items: center;
    background: #6667ab;
    border-radius: 8px;
    color: whitesmoke;
    display: flex;
    font-weight: 300;
    justify-content: center;
  }
`;

const ArtistText = styled.h2`
  font-family: Inter ,Outfit, sans-serif;
  font-size: 18px;
  width: 180px;
`;
