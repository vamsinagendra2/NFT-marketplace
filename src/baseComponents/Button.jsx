import React from 'react';
import MuiButton from '@mui/material/Button';
import { styled } from '@mui/system';
import theme from '../theme';

const MuiStyledButton = styled(MuiButton)({
  color: 'white',
  backgroundColor: theme.palette.background.tertiary,
  borderRadius: 20,
  textTransform: 'none',
  fontWeight: 600,
  "&:hover": {
    backgroundColor: theme.palette.background.tertiary,
  }
});

const Button = ({ children, ...props }) => (
  <MuiStyledButton {...props}>
    {children}
  </MuiStyledButton>
);

export default Button;
