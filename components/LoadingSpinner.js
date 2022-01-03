import React from 'react';
import styled from 'styled-components';

const LoadingSpinner = () => <Spinner />

export default LoadingSpinner;

const Spinner = styled.div`
  font-size: 10px;
  margin: 50px auto;
  text-indent: -9999em;
  width: 3em;
  height: 3em;
  background: transparent;
  border-radius: 50%;
  position: relative;
  -webkit-animation: load3 1.4s infinite linear;
  animation: load3 1.4s infinite linear;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);

  &:before {
    width: 50%;
    height: 50%;
    background: linear-gradient(45deg, #b1b1b1 0%, #d1d1d1 100%);
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    content: '';
  }
  &:after {
    background: transparent;
    width: 70%;
    height: 70%;
    border-radius: 50%;
    content: '';
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }  
}

@-webkit-keyframes load3 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load3 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: scale(1.4);
    transform: rotate(360deg);
  }
}
`;

