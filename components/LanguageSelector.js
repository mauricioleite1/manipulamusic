import React, { useState } from "react";
import styled from "styled-components";
import { Globe } from "@styled-icons/octicons/Globe";
import { setLanguage } from "../redux/userPreferencesSlice";
import { useAppDispatch } from "../redux/app/hooks.ts";

const LanguageSelector = () => {
  const dispatch = useAppDispatch();
  const [showLanguageOptions, setShowLanguageOptions] = useState(false);

  const chooseLanguage = (lang) => {
    dispatch(setLanguage(lang));
    setShowLanguageOptions(false);
  };

  return (
    <Container>
      {showLanguageOptions && (
        <div>
          <h5
            onClick={() => {
              chooseLanguage("en");
              localStorage.setItem("language", "en");
            }}
          >
            English
          </h5>
          <h5>/</h5>
          <h5
            onClick={() => {
              chooseLanguage("ptBR");
              localStorage.setItem("language", "ptBR");
            }}
          >
            Português (Br)
          </h5>
        </div>
      )}
      <Globe
        size="14"
        onClick={() => setShowLanguageOptions(!showLanguageOptions)}
        style={{ cursor: "pointer" }}
      />
    </Container>
  );
};

export default LanguageSelector;

const Container = styled.div`
  align-items: center;
  display: flex;
  gap: 10px;

  div {
    background: rgba(255, 255, 255, 0.5);
    border-radius: 28px;
    border-bottom: 1px solid grey;
    display: flex;
    gap: 10px;
    padding: 2px 10px;
    position: absolute;
    right: 20px;
    top: 40px;

    h5 {
      cursor: pointer;
      font-weight: 400;

      :hover {
        font-weight: 600;
      }
    }
  }
`;
