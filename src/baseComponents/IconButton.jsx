import React from 'react';
import MuiButton from '@mui/material/Button';
import { styled } from '@mui/system';
import { Typography } from '@mui/material';

const MuiStyledButton = styled(MuiButton)(({ theme }) => ({
  color: 'white',
  backgroundColor: '#A259FF',
  fontFamily: theme.typography.default,
  textTransform: 'none',
}));

const StyledImg = styled('img')(({ theme }) => ({
  height: 20,
  width: 20,
}));

const StyledTypograpy = styled(Typography)(({ theme }) => ({
  alignItems: "center",
  fontWeight: 600
}));

const IconButton = ({ children, ...props }) => (
  <MuiStyledButton {...props}>
    <StyledImg src={props.icon} alt="" style={{ marginRight: props.iconGap }}/>
    <StyledTypograpy variant='body1'>
      {props.text}
    </StyledTypograpy>
  </MuiStyledButton>
);

export default IconButton;
