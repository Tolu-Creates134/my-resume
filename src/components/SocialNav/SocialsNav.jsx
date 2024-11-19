import React from 'react'
import { Box, Stack, IconButton } from '@mui/material'
import colors from '../../styles/colors';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

const SocialsNav = ({direction}) => {


  return (
    <Box>
        <Stack
            spacing={2}
            justifyContent='center'
            alignItems='center'
            direction={direction}
        >
            <IconButton 
                sx={{
                    color: colors.textSecondary,
                    '&:hover': {
                        color: colors.secondary, // Text color on hover
                    },
                    transition: 'color 0.6s ease',
                }} 
                href="https://www.linkedin.com/in/tolu-abbass/" 
                target="_blank"
            >
                <LinkedInIcon sx={{ fontSize: '3.2rem' }} fontSize="large"/>
            </IconButton>
            <IconButton 
                sx={{
                    color: colors.textSecondary,
                    '&:hover': {
                    color: colors.secondary, // Text color on hover
                    },
                    transition: 'color 0.6s ease',
                }} 
                href="https://github.com/Tolu-Creates134?tab=repositories" 
                target="_blank"
            >
                <GitHubIcon sx={{ fontSize: '3.2rem' }} fontSize="large"/>
            </IconButton>
            <IconButton 
                sx={{
                    color: colors.textSecondary,
                    '&:hover': {
                        color: colors.secondary, // Text color on hover
                    },
                    transition: 'color 0.6s ease',
                }} 
                href="https://www.instagram.com/everything.dev/" 
                target="_blank"
            >
                <InstagramIcon sx={{ fontSize: '3.2rem' }} fontSize="large"/>
            </IconButton>
        </Stack>
    </Box>
  )
}

export default SocialsNav