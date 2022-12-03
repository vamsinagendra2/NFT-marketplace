import React from 'react';
import MuiInputBase from '@mui/material/InputBase';
import { styled } from '@mui/system';

const MuiStyledInputBase = styled(MuiInputBase)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  width: "100%",
  height: "100%",
  color: "black",
  paddingLeft: 20,
  borderRadius: 20,
}));

const InputBase = ({ children, ...props }) => (
  <MuiStyledInputBase {...props}>
    {children}
  </MuiStyledInputBase>
);

export default InputBase;
