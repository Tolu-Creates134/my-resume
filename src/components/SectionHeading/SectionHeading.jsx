import React from 'react'
import { Box, Typography } from '@mui/material'
import HorizontalLine from '../HorizontalLine/HorizontalLine'

const SectionHeading = ({ title}) => {
  return (
    <Box 
      sx={{
        flexDirection: 'row',
        display: 'flex',
        minHeight: 'auto',
        width: '100%',
        alignItems: 'end',
        marginBottom: '2.5rem'
      }}
    >
      <Typography variant='h4' sx={{whiteSpace: 'nowrap'}}>
        {title}
      </Typography>
      <HorizontalLine/>

    </Box>
  )
}

export default SectionHeading