/* eslint-disable react/prop-types */
import React from 'react';
import {
  StyledApiResponseContainer,
  StyledCard,
  StyledCardToEdit,
  StyledCardContent,
  StyledCardActions,
  StyledCardButton,
  StyledLyricList,
  StyledTextField,
} from './mui-styles/apiResponseStyles';

const ApiResponses = ({
  suggestedLyrics,
  viewOrEdit,
  alternateViewOrEdit,
  lyricsToEdit,
  editLyrics,
  deleteSuggestion,
}) => {
  return (
    <StyledApiResponseContainer>
      {suggestedLyrics.map((lyrics, lyricsIndex) => {
        if (lyricsIndex !== lyricsToEdit) {
          return (
            <li key={lyricsIndex}>
              <StyledCard className='lyric-and-prompt-container'>
                <StyledCardContent className='lyric-prompt'>
                  <p style={{ borderBottom: '1px solid rgb(255,255,255,.6)' }}>
                    {lyrics.lyricPrompt}
                  </p>
                  <StyledLyricList className='lyric-response'>
                    {lyrics.lyrics
                      .split('\n')
                      .map((sentence, sentenceIndex) => {
                        return (
                          <li
                            key={sentenceIndex}
                            style={{ marginBottom: '5px' }}
                          >
                            {sentence}
                          </li>
                        );
                      })}
                  </StyledLyricList>
                </StyledCardContent>
                <StyledCardActions>
                  <StyledCardButton
                    className='edit-lyric-button'
                    size='small'
                    id={lyricsIndex}
                    onClick={() => {
                      alternateViewOrEdit(lyricsIndex);
                    }}
                  >
                    Edit
                  </StyledCardButton>
                  <StyledCardButton
                    className='delete-lyric-button'
                    size='small'
                    onClick={() => {
                      deleteSuggestion(lyricsIndex);
                    }}
                  >
                    Delete
                  </StyledCardButton>
                </StyledCardActions>
              </StyledCard>
            </li>
          );
        } else if (viewOrEdit === 'edit' && lyricsToEdit === lyricsIndex) {
          return (
            <li key={lyricsIndex}>
              <StyledCardToEdit className='lyric-and-prompt-container-for-editing'>
                <StyledCardContent className='lyric-prompt'>
                  <p style={{ borderBottom: '1px solid rgb(44, 4, 28,.8)' }}>
                    {lyrics.lyricPrompt}
                  </p>
                  <div>
                    <StyledTextField
                      id='outlined-multiline-static'
                      label='Multiline'
                      multiline
                      rows={4}
                      defaultValue={lyrics.lyrics}
                      onChange={(e) => {
                        editLyrics(e.target.value, lyricsIndex);
                      }}
                    ></StyledTextField>
                  </div>
                </StyledCardContent>
                <StyledCardActions>
                  <StyledCardButton
                    className='edit-lyric-button'
                    size='small'
                    id={lyricsIndex}
                    onClick={() => {
                      alternateViewOrEdit(lyricsIndex);
                    }}
                  >
                    Save Edit
                  </StyledCardButton>
                  <StyledCardButton
                    className='delete-lyric-button'
                    size='small'
                    onClick={() => {
                      deleteSuggestion(lyricsIndex);
                    }}
                  >
                    Delete
                  </StyledCardButton>
                </StyledCardActions>
              </StyledCardToEdit>
            </li>
          );
        }
      })}
    </StyledApiResponseContainer>
  );
};

export default ApiResponses;