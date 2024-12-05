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

            <Box sx={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                <Box sx={{width: '100%', height: '25rem', overflow: 'hidden', padding: 0}}>
                    <img
                        src={'/images/portfolio-headshot.png'} // Relative path from the public folder
                        alt="headshot"
                        style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover'}}
                    />
                </Box>

                <Box sx={{width: '75%'}}>
                    <Typography>
                        Hello! I'm a 23-year-old Software Engineer based in London, with a passion for building scalable and impactful software applications.
                        Currently, I am part of Avanade, a joint venture between Microsoft and Accenture, where I contribute to the development of large-scale software solutions.
                        <br></br>
                        <br></br>
                        I have significant experience with Azure Cloud Services, holding two Microsoft certifications and actively working toward my third. My expertise in cloud 
                        technologies complements my software engineering background, enabling me to design and deliver efficient, cloud-enabled solutions.
                        <br></br>
                        <br></br>
                        In addition to my professional work, I also take on freelance projects, specializing in creating engaging and user-friendly websites
                        using platforms like Webflow and Wix Studios. This blend of corporate and freelance experience has honed my technical skills and creative problem-solving abilities.
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