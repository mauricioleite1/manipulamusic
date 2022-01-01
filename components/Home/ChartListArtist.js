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

        {showExternalIcon && <LinkExternal size={12} />}
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
  width: 10px;
  text-align: right;
`;