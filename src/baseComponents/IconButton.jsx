import React from 'react';
import MuiButton from '@mui/material/Button';
import { styled } from '@mui/system';
import { Typography } from '@mui/material';

const MuiStyledButton = styled(MuiButton)(({ theme }) => ({
  color: 'white',
  backgroundColor: theme.palette.background.tertiary,
  fontFamily: theme.typography.default,
  textTransform: 'none',
  "&:hover": {
    backgroundColor: theme.palette.background.tertiary,
  }
}));

const StyledImg = styled('img')(({ theme }) => ({
  height: 20,
  width: 20,
}));

const StyledTypograpy = styled(Typography)(({ theme }) => ({
  alignItems: "center",
  fontWeight: 600,
  marginLeft: 10
}));

const IconButton = ({ children, ...props }) => (
  <MuiStyledButton {...props}>
    <StyledImg src={props.icon} alt="" style={{ marginRight: props.icongap }}/>
    <StyledTypograpy variant='body1'>
      {props.text}
    </StyledTypograpy>
  </MuiStyledButton>
);

export default IconButton;
