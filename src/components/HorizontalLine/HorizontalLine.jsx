import React from 'react'
import { Divider, Box } from '@mui/material';
import colors from '../../styles/colors';

const HorizontalLine = () => {
  return (
    <Box
      sx={{width: '50%'}}
    >
      <Divider sx={{ backgroundColor: colors.textSecondary, width: '100px', borderWidth: '1px' }} />
    </Box>
  )
}

export default HorizontalLine;