import React from 'react'
import { Box, Typography, Stack, Badge } from '@mui/material'
import colors from '../../styles/colors'

const EachProject = ({ProjectName, ProjectType, BadgeTitle, ImageLocation}) => {
  return (
    <Stack
        sx={{ 
            maxHeight: '22rem', 
            maxWidth: '22rem',
            backgroundColor: colors.projectItemBackgroundColor,
            '&:hover': {
                transform: 'scale(1.05)', // Slight zoom effect on hover
                cursor: 'pointer'
            },
            transition: 'transform 0.6s ease-in-out'
        }}
        spacing={0}
    >   

        <Badge badgeContent={BadgeTitle} color='primary'>
            <Box sx={{width: '100%', height: '15rem', overflow: 'hidden'}}>
                <img
                    src={ImageLocation} // Relative path from the public folder
                    alt="Description"
                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover'}} // Responsive image
                />
            </Box>
        </Badge>

        <Stack
            sx={{
                alignItems:'left',
                justifyContent: 'center',
                height: 'auto',
                paddingLeft: '1.3rem',
                paddingBottom: '1.3rem'

            }}
            spacing={1}
        >
            <Typography variant='h6' sx={{fontWeight: 600, textAlign: 'left'}}>
                {ProjectName}
            </Typography>
            <Typography align='left'>
                {ProjectType}
            </Typography>
        </Stack>
        
    </Stack>
  )


}

export default EachProject