/* eslint-disable react/prop-types */
import React from 'react';
import { css } from '@emotion/react';
import {
  StyledForm,
  StyledInstructions,
  StyledInstructionsHeader,
  StyledInstructionsBody,
  StyledThemeInput,
  StyledThemeInputLabel,
  StyledThemeHelperText,
  StyledInputAndButtonContainer,
  StyledFormControl,
  StyledEngineInputLabel,
  StyledOutlinedInput,
  StyledMenuItem,
  StyledSelect,
  StyledFormContainer,
  StyledSearchButton,
} from './mui-styles/songGeneratorFormStyles';
import { ClipLoader } from 'react-spinners';

const StyledSpinner = css`
  margin: auto;
  color: white;
  margin: 0 auto;
  padding: 0;
  position: relative;
`;

const SongGenerator = ({
  theme,
  findLyricSuggestions,
  sendLyricRequest,
  searchStatus,
  engines,
  selectedEngine,
  chooseEngine,
  loading,
}) => {
  return (
    <StyledFormContainer>
      <StyledInstructions>
        <StyledInstructionsHeader id='instructions-header'>
          <h2 style={{ margin: '10px' }}>
            Feeling lyrically uninspired lately?
          </h2>
        </StyledInstructionsHeader>
        <StyledInstructionsBody id='instructions'>
          <h3>
            Enter the theme to any songs you are currently writing below and get
            some lyric suggestions! Like what you are seeing? Further edit and
            work with the suggested lyrics on the interactive cards below! Not
            sure you like your responses? Choose from one of any lyric
            generating engines in the drop down menu for new and different
            results!
          </h3>
        </StyledInstructionsBody>
      </StyledInstructions>
      <StyledForm variant='standard'>
        <StyledThemeInputLabel htmlFor='theme-input'>
          Theme
        </StyledThemeInputLabel>
        <StyledThemeInput
          id='theme-input'
          value={theme}
          onChange={(e) => {
            findLyricSuggestions(e.target.value);
          }}
          aria-describedby='theme-helper-text'
        ></StyledThemeInput>
        <StyledThemeHelperText id='theme-helper-text'>
          Enter Lyric Theme Here
          {searchStatus ? (
            <></>
          ) : (
            <span style={{ color: 'blue' }}>
              ** Please Try a different Search
            </span>
          )}
        </StyledThemeHelperText>
        <StyledInputAndButtonContainer>
          <StyledFormControl sx={{ m: 1, width: '30%' }}>
            <StyledEngineInputLabel id='engine-selector'>
              Engine
            </StyledEngineInputLabel>
            <StyledSelect
              labelId='engine-selector'
              id='engines'
              value={selectedEngine}
              onChange={(e) => {
                chooseEngine(e.target.value);
              }}
              input={<StyledOutlinedInput label='Engine' />}
            >
              {engines.map((engine, engineIndex) => (
                <StyledMenuItem key={engineIndex} value={engine}>
                  {engine}
                </StyledMenuItem>
              ))}
            </StyledSelect>
          </StyledFormControl>
          <ClipLoader
            color='#5b083a'
            css={StyledSpinner}
            loading={loading}
            size={150}
          />
          <StyledSearchButton
            id='theme-search-button'
            onClick={sendLyricRequest}
          >
            Get Lyrics
          </StyledSearchButton>
        </StyledInputAndButtonContainer>
      </StyledForm>
    </StyledFormContainer>
  );
};

export default SongGenerator;