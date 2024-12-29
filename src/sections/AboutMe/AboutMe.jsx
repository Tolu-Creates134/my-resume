import React from 'react'
import { Typography, Box } from "@mui/material";
import SectionHeading from '../../components/SectionHeading/SectionHeading';

const AboutMe = () => {
  return (
    <Box
        sx={{
            height:"auto",
            justifyContent: "center",
            display: "flex",
            width: '100%',
            marginBottom: '10%'
        }}
        id='about-me'
        className='About Me Section'
    >
        <Box sx={{width: '70%'}}>
            <Box>
                <SectionHeading title={'About Me'}/>
            </Box>

            <Box sx={{display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center', flexDirection: { xs: 'column', sm: 'row' }}}>
                <Box sx={{width: '100%', height: '25rem', overflow: 'hidden', padding: 0}}>
                    <img
                        src={'/images/portfolio-headshot.png'} // Relative path from the public folder
                        alt="headshot"
                        style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover'}}
                    />
                </Box>

                <Box sx={{width: '75%', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    <Typography>
                        Hello! I'm a 23-year-old Software Engineer based in London, with a passion for building scalable and impactful software applications.
                        Currently, I am part of Avanade, a joint venture between Microsoft and Accenture, where I contribute to the development of large-scale software solutions.
                        <br></br>
                        <br></br>
                        When I'm not coding, I'm continually exploring new technologies and striving to grow both personally and professionally. Let's create something amazing together!
                    </Typography>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default AboutMe