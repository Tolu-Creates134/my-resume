import React from 'react'
import { Box, Typography } from '@mui/material'
import SectionHeading from '../../components/SectionHeading/SectionHeading'
import Tab from '../../components/Tab/Tab'

const Skills = () => {

    const mySkills = ['React JS', 'Redux', 'HTML', 'CSS', 'C#', 'API', 'Azure', 'JavaScript']


  return (
    <Box 
        sx={{
            height:"auto",
            justifyContent: "center",
            display: "flex",
            width: '100%',
            marginBottom: '10%'
        }}
        className='Skills Section'
        id='skills'
    >   
        <Box className='Skills Content' sx={{width: '70%', height: '100%'}}>
            <Box>
                <SectionHeading title={'My Skills'}/>
            </Box>

            <Box sx={{ width: '100%', display: 'flex', flexWrap: 'wrap', gap: '0.5rem'}}>
                {
                    mySkills.map((skill) => (
                        <Tab key={skill} title={skill} />
                    ))
                }
            </Box>


        </Box>

    </Box>
  )
}

export default Skills