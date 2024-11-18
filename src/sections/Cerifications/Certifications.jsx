import React from 'react'
import SectionHeading from '../../components/SectionHeading/SectionHeading'
import { Box } from "@mui/material";
import EachProject from '../Projects/EachProject';
import Grid from '@mui/material/Grid2';

const Certifications = () => {

    const myCertifications = [
        {
            projectName: 'Microsoft Certified: Azure Fundamentals',
            projectType: 'AZ-900',
            badgeTitle: 'Certified',
            imageLocation: '/images/az900NoBg2.png'
        },
        {
            projectName: 'Microsoft Certified: Azure AI Fundamentals',
            projectType: 'AI-900',
            badgeTitle: 'Certified',
            imageLocation: '/images/ai900NoBg2.png'
        },
        {
            projectName: 'Microsoft Certified: Azure Administrator Associate',
            projectType: 'AZ-104',
            badgeTitle: 'Working Progress',
            imageLocation: '/images/az104NoBg.png'
        }
    ]

  return (
    <Box
        sx={{
            height:"auto",
            justifyContent: "center",
            display: "flex",
            width: '100%',
        }}
        className='Certification Section'
        id='certifications'
    >
        <Box sx={{width: '70%'}}>
            <Box>
                <SectionHeading title={'Certfifcation'}/>
            </Box>

            <Box sx={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                <Grid spacing={4} sx={{ width: '100%'}} container wrap='wrap' justifyContent='center'>
                    {
                        myCertifications.map((certification) => (
                            <Grid item xs={12} sm={3}>
                                <EachProject 
                                    ProjectName={certification.projectName} 
                                    ProjectType={certification.projectType} 
                                    BadgeTitle={certification.badgeTitle} 
                                    ImageLocation={certification.imageLocation}
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

export default Certifications