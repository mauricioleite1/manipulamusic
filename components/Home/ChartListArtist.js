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
              {secondaryText && <h5>por {secondaryText}</h5>}
            </ArtistText>
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
  padding-block: 8px;
  position: relative;
  transition: 0.42s ease-in-out;
  width: 20rem;

  :hover {
    background: rgba(255, 255, 255, 0.8);
  }
`;

const ArtistImage = styled(Image)`
  border-radius: 18px;
`;

const PositionText = styled.h5`
  color: grey;
  font-size: 10px;
  text-align: right;
  width: 10px;
`;

const ExtraInfo = styled.div`
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(26px);
  border-radius: 28px;
  border-top: 1px solid whitesmoke;
  border-left: 1px solid whitesmoke;
  bottom: 3rem;
  box-shadow: rgba(99, 99, 99, 0.4) 0px 2px 8px 2px;
  display: flex;
  flex-direction: column;
  opacity: 1;
  gap: 26px;
  left: 14rem;
  position: absolute;
  padding: 2.5rem;
  width: max-content;
  z-index: 99;
`;

const ArtistText = styled.div`
  font-family: Inter ,Outfit, sans-serif;
  font-size: 18px;
  font-weight: 600;
  width: 190px;
  display: flex;
  flex-flow: row wrap;
  gap:4px;

  h5 {
    font-size: 11px;
  }
`;
