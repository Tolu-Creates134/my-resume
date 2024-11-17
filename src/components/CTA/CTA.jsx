import React from 'react'
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import colors from '../../styles/colors';

const CTA = () => {
  return (
    <Box>
        <Button 
            variant='contained'
            sx={{
                backgroundColor: colors.background,
                color: colors.typeWriteTextColor,
                borderRadius: '1px',
                border: `1px solid ${colors.typeWriteTextColor}`,
                marginTop: '2rem',
                '&:hover': {
                    color: colors.background,
                    backgroundColor: colors.typeWriteTextColor,
                },
                transition: 'all 0.5s ease', 
            }}
        >
            Contact Me Here
        </Button>
    </Box>

  )
}

export default CTA