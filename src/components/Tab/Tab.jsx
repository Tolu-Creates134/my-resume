import React from 'react'
import { Box, Typography } from '@mui/material'
import colors from '../../styles/colors'

const Tab = ({title}) => {
  return (
    <button
      style={{
        backgroundColor: colors.tabBackgroundColor,
        width: 'auto',
        height: '30px',
        borderRadius: '10px',
        border: 'none',
        color: colors.textPrimary,
        padding: '0 1.25rem',
        marginRight: '2rem',
      }}
    >
      <Typography>
        {title}
      </Typography>
    </button>
    
  )
}

export default Tab