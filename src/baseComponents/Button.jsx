import React from 'react';
import MuiButton from '@mui/material/Button';
import { styled } from '@mui/system';

const MuiStyledButton = styled(MuiButton)({
  color: 'white',
  backgroundColor: 'gray',
  padding: 8,
  borderRadius: 4,
});

const Button = ({ children, ...props }) => (
  <MuiStyledButton {...props}>
    {children}
  </MuiStyledButton>
);

export default Button;
