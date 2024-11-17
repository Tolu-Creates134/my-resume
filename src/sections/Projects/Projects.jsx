import React from 'react'
import { Box } from "@mui/material";
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import EachProject from './EachProject';
import Grid from '@mui/material/Grid2';

const Projects = () => {

    const myProjects = [
        {
            projectName: 'Project One',
            projectType: 'Cloud Development',
            badgeTitle: 'Project',
            imageLocation: '/images/placeholderImageReact.jpeg'
        },
        {
            projectName: 'Project One',
            projectType: 'Cloud Development',
            badgeTitle: 'Project',
            imageLocation: '/images/placeholderImageReact.jpeg'
        },
        {
            projectName: 'Project One',
            projectType: 'Cloud Development',
            badgeTitle: 'Project',
            imageLocation: '/images/placeholderImageReact.jpeg'
        },
        {
            projectName: 'Project One',
            projectType: 'Cloud Development',
            badgeTitle: 'Project',
            imageLocation: '/images/placeholderImageReact.jpeg'
        }
    ]

  return (
    <Box
        sx={{
            height:"auto",
            justifyContent: "center",
            display: "flex",
            width: '100%',
            marginBottom: '10%'
        }}
    >
        <Box sx={{width: '70%'}}>

            <Box>
                <SectionHeading title={'Projects'}/>
            </Box>

            <Box sx={{width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                <Grid spacing={4} sx={{ width: '100%'}} container wrap='wrap' justifyContent='center'>
                    {
                        myProjects.map((project) => (
                            <Grid item xs={12} sm={3}>
                                <EachProject 
                                    ProjectName={project.projectName} 
                                    ProjectType={project.projectType} 
                                    BadgeTitle={project.badgeTitle} 
                                    ImageLocation={project.imageLocation}
                                />
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>


        </Box>
    </Box>
  )
}

export default Projects