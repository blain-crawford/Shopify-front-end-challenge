import { styled } from '@mui/system';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export const StyledApiResponseContainer = styled('ul', {
  name: 'StyledApiResponseContainer',
})({
  width: '50%',
  minHeight: '100px',
  display: 'flex',
  textAlign: 'center',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  margin: '0 auto',
  gap: '20px',
  listStyle: 'none',
});

export const StyledCard = styled(Card, {
  name: 'StyledCard',
})({
  width: '300px',
  backgroundColor: 'rgb(44, 4, 28)',
  color: 'white',
  border: '1px solid white',
  margin: '0 auto',
  borderRadius: '10px',
  textAlign: 'center',
  boxShadow: '0px 1px 29px 20px rgba(0,0,0,0.46)',
});

export const StyledCardToEdit = styled(Card, {
  name: 'StyledCard',
})({
  width: '300px',
  backgroundColor: 'rgb(255, 255, 255)',
  color: 'rgb(44, 4, 28)',
  border: '2px solid rgb(255,255,255,.4)',
  margin: '0 auto',
  borderRadius: '10px',
  textAlign: 'center',
  boxShadow: '0px 1px 29px 20px rgba(0,0,0,0.46)',
});

export const StyledCardContent = styled(CardContent, {
  name: 'StyledCardContent',
})({
  width: '80%',
  margin: '0 auto',
});

export const StyledLyricList = styled('ul', {
  name: 'StyledLyricList',
})({
  listStyle: 'none',
  display: 'table',
  margin: '0 auto',
  padding: '0',
  textAlign: 'center',
});

export const StyledTextField = styled(TextField, {
  name: 'StyledTextField',
})({
  width: '90%',
  color: 'rgb(44, 4, 28)',
});

export const StyledCardActions = styled(CardActions, {
  name: 'StyledCardActions',
})({
  BorderTop: '1px solid rgb(255,255,255,.6)',
});

export const StyledCardButton = styled(Button, {
  name: 'StyledCardButton',
})({
  display: 'flex',
  width: '50%',
  margin: '10px 0 0 auto',
  border: '2px solid rgb(44, 4, 28,.4)',
  borderRadius: '20px',
  backgroundColor: 'rgb(255,255,255,.9)',
  color: 'rgb(44, 4, 28)',
  ':hover': {
    color: 'white',
    border: '1px solid white',
    backgroundColor: 'rgb(44, 4, 28)',
  },
});