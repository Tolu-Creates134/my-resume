import React from 'react'
import { Typography, Box, Stack } from "@mui/material";
import { display } from '@mui/system';
import colors from '../../styles/colors';
import Typewriter from 'typewriter-effect'
import SocialsNav from '../../components/SocialNav/SocialsNav';
import VerticalLine from '../../components/VerticalLine/VerticalLine';
import CTA from '../../components/CTA/CTA';

const Hero = () => {

  return ( // xs sm md 
    <Box
        sx={{
            height:'80vh',  //90vh laptop size
            justifyContent: "center",
            alignItems: "flex-start",
            display: "flex",
            width: '100%',
            top: '0'
        }}
        className='Hero Section'
    >
        <Box
            sx={{
                width: '70%', //70%
                display: 'flex',
                height: 'auto', //35% 60%
                alignItems: 'space-between'
            }}
        >
            <Stack
                sx={{
                    alignItems: 'flex-start',  // flex-start laptop value
                }}
                spacing={2}
            >
                <Typography sx={{color: colors.secondary}} variant='h5'>Hi, my name is</Typography>
                <Typography sx={{fontWeight: 400, textAlign: 'left', fontSize: { xs: '4.3rem', sm: '6rem', md: '8rem' } }}>Tolu Abbass</Typography>
                <Typography
                    variant='h4'
                    sx={{
                        color: colors.typeWriteTextColor,
                        fontSize: {xs: '1.5rem', sm: '2rem', md: '2.7rem'},
                        width: '100%',
                        textAlign: 'left'
                    }}
                >
                    <Typewriter
                        options={{
                            autoStart: true,
                            loop: true,
                            delay: 40,
                            strings:['I have two hats.', 'Software Engineer', 'And Cloud Developer :)']
                        }}
                    />
                </Typography>
                <Typography align="left" sx={{color: colors.secondary}}>
                    23-year-old Software Engineer based in London. 
                    I'm passionate about building innovative software solutions and exploring the limitless possibilities of cloud technology.
                </Typography>
                <CTA/>
            </Stack>
        </Box>
        <Box sx={{position: 'fixed',top: '30%',right: '2%'}}>
            <VerticalLine/>
            <SocialsNav/>
            <VerticalLine/>
        </Box>

    </Box>
  )
}

export default Hero