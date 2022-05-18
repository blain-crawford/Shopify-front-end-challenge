/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PageHeader from './PageHeader';
import SongGenerator from './SongGeneratorForm';
import ApiResponses from './ApiResponses';
import { StyledApp } from './mui-styles/appStyles';
import axios from 'axios';
import useLocalStorage from 'react-use-localstorage';
import { OPEN_AI_SECRET } from './utils';

  // eslint-disable-next-line no-unused-vars
  const checkForStoredIdeas = (() => {
    if (!localStorage.storedIdeas) {
      localStorage.storedIdeas = JSON.stringify([])
    }
  })();

const App = () => {
  const [storedIdeas, setStoredIdeas] = useLocalStorage('storedIdeas');
  const [lyricsTheme, setLyricsTheme] = useState('');
  const [suggestedLyrics, setSuggestedLyrics] = useState(
    JSON.parse(localStorage.storedIdeas),
  );

  const [searchStatus, setSearchStatus] = useState(true);
  const [viewOrEdit, setViewOrEdit] = useState('view');
  const [lyricsToEdit, setLyricsToEdit] = useState('');
  const [selectedEngine, setSelectedEngine] = useState('text-curie-001');
  const [loading, setLoading] = useState(false);
  const engines = [
    'text-curie-001',
    'text-davinci-002',
    'text-babbage-001',
    'text-ada-001',
  ];

  let testRequest = {
    prompt: `Write a song about ${lyricsTheme}`,
    temperature: 1,
    max_tokens: 100,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 2.0,
  };

  let options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',

      // eslint-disable-next-line no-undef
      Authorization: `Bearer ${OPEN_AI_SECRET}`,
    },
    data: testRequest,
    url: `https://api.openai.com/v1/engines/${selectedEngine}/completions`,
  };

  const findLyricSuggestions = (theme) => {
    let newTheme = theme;
    setLyricsTheme(newTheme);
  };

  const chooseEngine = (engine) => {
    setSelectedEngine(engine);
  };

  const sendLyricRequest = () => {
    setLoading(true);
    axios(options)
      .then(function (response) {
        // handle success
        setSuggestedLyrics([
          {
            lyrics: response.data.choices[0].text,
            lyricPrompt: lyricsTheme,
          },
          ...suggestedLyrics,
        ]);

        setStoredIdeas(
          `${JSON.stringify([
            {
              lyrics: response.data.choices[0].text,
              lyricPrompt: lyricsTheme,
            },
            ...suggestedLyrics,
          ])}`,
        );
        setLyricsTheme('');
        setSearchStatus(true);
        setLoading(false);
      })
      .catch(function (error) {
        // handle error
        setSearchStatus(false);
        setLoading(false);
      });
  };

  const editLyrics = (lyrics, lyricsIndex) => {
    let newSuggestedLyrics = [...suggestedLyrics];
    newSuggestedLyrics[lyricsIndex].lyrics = lyrics;
    setSuggestedLyrics(newSuggestedLyrics);
    setStoredIdeas(JSON.stringify(newSuggestedLyrics));
  };

  const alternateViewOrEdit = (lyricIndex) => {
    switch (viewOrEdit) {
      case 'view':
        setViewOrEdit('edit');
        setLyricsToEdit(lyricIndex);
        break;
      case 'edit':
        setViewOrEdit('view');
        setLyricsToEdit('');
        break;
      default:
        return;
    }
  };

  const deleteSuggestion = (lyricsIndex) => {
    let newSuggestedLyrics = [...suggestedLyrics];
    newSuggestedLyrics.splice(lyricsIndex, 1);
    setSuggestedLyrics(newSuggestedLyrics);
    setStoredIdeas(JSON.stringify(newSuggestedLyrics));
  };
  return (
    <div>
      <StyledApp>
        <PageHeader />
        <SongGenerator
          theme={lyricsTheme}
          findLyricSuggestions={findLyricSuggestions}
          sendLyricRequest={sendLyricRequest}
          searchStatus={searchStatus}
          engines={engines}
          selectedEngine={selectedEngine}
          chooseEngine={chooseEngine}
          loading={loading}
        />
        <ApiResponses
          suggestedLyrics={suggestedLyrics}
          alternateViewOrEdit={alternateViewOrEdit}
          viewOrEdit={viewOrEdit}
          lyricsToEdit={lyricsToEdit}
          editLyrics={editLyrics}
          deleteSuggestion={deleteSuggestion}
        />
      </StyledApp>
    </div>
  );
};

export default App;