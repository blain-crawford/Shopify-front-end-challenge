import { styled } from '@mui/system';
import { Button } from '@mui/material';
import Input from '@mui/material/Input';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export const StyledFormContainer = styled('div', {
  name: 'StyledFormContainer',
})({
  width: '50%',
  borderRadius: '20px',
  padding: '20px',
  margin: '20px auto',
  border: '2px solid rgb(255,255,255,.4)',
  textAlign: 'center',
  backgroundColor: 'rgb(248, 240, 227,.9)',
  boxShadow: '0px 1px 29px 20px rgba(0,0,0,0.46)',
});

export const StyledInstructions = styled('div', {
  name: 'StyledInstructions',
})({
  width: '70%',
  margin: '10px auto',
  border: '2px solid rgb(44, 4, 28,.4)',
  borderRadius: '20px',
  backgroundColor: 'rgb(255,255,255,.7)',
  color: 'rgb(44, 4, 28, .9)',
  fontFamily: 'Kanit, sans-serif',
});

export const StyledInstructionsHeader = styled('div', {
  name: 'StyledInstructionsHeader',
})({
  width: '70%',
  margin: '0 auto',
  fontStyle: 'bold',
  fontSize: '12px',
  borderBottom: '2px solid rgb(44, 4, 28, .3)',
});

export const StyledInstructionsBody = styled('div', {
  name: 'StyledInstructionsBody',
})({
  width: '70%',
  margin: '0 auto',
  fontSize: '12px',
});

export const StyledForm = styled(FormControl, {
  name: 'StyledForm',
})({
  width: '70%',
  margin: '50px auto',
  color: 'rgb(44, 4, 28)',
});

export const StyledThemeInput = styled(Input, {
  name: 'StyledThemeInput',
})({
  color: 'rgb(44, 4, 28)',
});

export const StyledThemeInputLabel = styled(InputLabel, {
  name: 'StyledThemeInputLabel',
})({
  color: 'rgb(44, 4, 28)',
  fontFamily: 'Kanit, sans-serif',
});

export const StyledThemeHelperText = styled(FormHelperText, {
  name: 'StyledThemeHelperText',
})({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  color: 'rgb(44, 4, 28)',
});

export const StyledFormControl = styled(FormControl, {
  name: 'StyledFormControl',
})({});

export const StyledEngineInputLabel = styled(InputLabel, {
  name: 'StyledEngineInputLabel',
})({
  color: 'rgb(44, 4, 28)',
  fontSize: '18px',
});

export const StyledOutlinedInput = styled(OutlinedInput, {
  name: 'StyledOutlinedInput',
})({
  color: 'rgb(44, 4, 28)',
  backgroundColor: 'rgb(255,255,255, .9)',
  borderRadius: '20px',
});

export const StyledMenuItem = styled(MenuItem, {
  name: 'StyledMenuItem',
})({});

export const StyledSelect = styled(Select, {
  name: 'StyledSelect',
})({});

export const StyledInputAndButtonContainer = styled('div', {
  name: 'StyledInputAndButtonContainer',
})({
  marginTop: '15px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center',
});

export const StyledSearchButton = styled(Button, {
  name: 'StyledSearchButton',
})({
  display: 'flex',
  width: '20%',
  margin: '10px 0 0 auto',
  border: '2px solid rgb(44, 4, 28,.4)',
  borderRadius: '20px',
  backgroundColor: 'rgb(255,255,255,.9)',
  color: 'rgb(44, 4, 28)',
  ':hover': {
    color: 'white',
    border: '#5b083a',
    backgroundColor: 'rgb(44, 4, 28, .6)',
  },
});