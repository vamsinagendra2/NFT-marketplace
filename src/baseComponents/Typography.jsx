import React from 'react';
import MuiTypography from '@mui/material/Typography';
import { styled } from '@mui/system';

const MuiStyledTypography = styled(MuiTypography)({
  
});

const Typography = ({ children, ...props }) => (
  <MuiStyledTypography {...props}>
    {children}
  </MuiStyledTypography>
);

export default Typography;
