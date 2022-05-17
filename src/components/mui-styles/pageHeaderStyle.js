import { styled } from '@mui/system';
import HeaderBackground from '../../images/Header-Background.jpeg';

export const StyledHeader = styled('header', {
  name: 'StyledHeader',
  slot: 'PageTopper',
})({
  height: '40vh',
  width: '100%',
  opacity: '.8',
  marginBottom: '50px',
  backgroundImage: `linear-gradient(rgb(44, 4, 28, .9),rgba(.3, .5, .6, .7)), url(${HeaderBackground})`,
  backgroundPosition: 'bottom',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const StyledHeaderText = styled('div', {
  name: 'StyledHeaderText',
})({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
  width: '50%',
  margin: '25px auto 0 auto',
  padding: '10px',
  height: '10%',
  color: 'white',
  fontFamily: 'Kanit, sans-serif',
  fontStyle: 'italic',
  opacity: '1',
});