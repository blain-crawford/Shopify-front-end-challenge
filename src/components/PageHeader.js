import React from 'react';
import { StyledHeader, StyledHeaderText } from './mui-styles/pageHeaderStyle';
import LyricsOutlinedIcon from '@mui/icons-material/LyricsOutlined';

const PageHeader = () => {
  return (
    <StyledHeader id='page-header'>
      <StyledHeaderText id='app-name'>
        <LyricsOutlinedIcon
          className='logo-icon'
          style={{ fontSize: '60px' }}
        />
        <h1 style={{ fontSize: '50px' }}>LyricGenerator</h1>
        <LyricsOutlinedIcon
          className='logo-icon'
          style={{ fontSize: '60px', marginLeft: '10px' }}
        />
      </StyledHeaderText>
    </StyledHeader>
  );
};

export default PageHeader;