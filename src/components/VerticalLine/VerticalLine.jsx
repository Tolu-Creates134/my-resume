import React from 'react'
import { Divider, Box } from '@mui/material';
import colors from '../../styles/colors';

const VerticalLine = () => {
  return (
    <Box
      sx={{ 
        height: '70px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center' 
      }}
    >
      <Divider orientation="vertical" flexItem sx={{ backgroundColor: colors.textSecondary, width: '0.5px' }} />
    </Box>
  )
}

export default VerticalLine;