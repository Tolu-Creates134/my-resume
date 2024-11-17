import React from 'react'
import { Box, Stack, IconButton } from '@mui/material'
import colors from '../../styles/colors';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

const SocialsNav = () => {


  return (
    <Box>
        <Stack
            spacing={2}
            justifyContent='center'
            alignItems='center'
        >
            <IconButton color='primary' href="https://facebook.com" target="_blank">
                <LinkedInIcon fontSize="large"/>
            </IconButton>
            <IconButton color='primary' href="https://facebook.com" target="_blank">
                <GitHubIcon fontSize="large"/>
            </IconButton>
            <IconButton color='primary' href="https://facebook.com" target="_blank">
                <InstagramIcon fontSize="large"/>
            </IconButton>
        </Stack>
    </Box>
  )
}

export default SocialsNav