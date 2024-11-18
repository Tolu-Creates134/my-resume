import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Typography, Box, IconButton, Drawer, AppBar, Toolbar, Button, styled } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import colors from '../../styles/colors';


const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const StyledSpan = styled('span')(() => ({
    color: colors.textSecondary,
  }));

  return (
    <Box sx={{height: '20vh',}}>
        <AppBar
            sx={{
                boxShadow: 'none',
            }}
        >
            <Toolbar 
                sx={{
                    alignItems: 'end',
                    justifyContent: 'center',
                    backgroundColor: colors.background,
                }}
            >
                {/* Menu Icon for Small Screens */}
                <Box 
                    sx={{
                        display:{xs: 'flex',sm: 'none'},
                        justifyContent: 'flex-end',
                        width: '100%'
                    }}
                >
                    <IconButton
                        edge='end' 
                        color='inherit' 
                        size='large'
                        onClick={toggleDrawer(true)} // Opens the Drawer
                    >
                        <MenuIcon sx={{ fontSize: '3rem' }}/>
                    </IconButton>
                </Box>

                {/* Drawer for Navigation (Small Screens) */}
                <Drawer
                    anchor='right'
                    open={drawerOpen}
                    onClose={toggleDrawer(false)}
                >
                    <Box
                        sx={{
                            width: 250,
                            display: 'flex',
                            flexDirection: 'column',
                            padding: 2,
                        }}
                        role="presentation"
                        onClick={toggleDrawer(false)}
                        onKeyDown={toggleDrawer(false)}
                    >
                        <Typography variant="h6" sx={{ marginBottom: 2 }}>01. About Me</Typography>
                        <Typography variant="h6" sx={{ marginBottom: 2 }}>02. Skills</Typography>
                        <Typography variant="h6" sx={{ marginBottom: 2 }}>03. Projects</Typography>
                        <Typography variant="h6" sx={{ marginBottom: 2 }}>04. Certifications</Typography>
                    </Box>

                </Drawer>

                {/*Navigation for large devices*/}
                <Box sx={{display:{xs: 'none',sm: 'flex'}}}>
                    <Link to='about-me' smooth={true} duration={500} offset={-100}>
                        <Button color='inherit' size='large'><StyledSpan>01.</StyledSpan>&nbsp;&nbsp; About Me</Button>
                    </Link>
                    <Link to='skills' smooth={true} duration={500} offset={-100}>
                        <Button color='inherit' size='large'><StyledSpan>02.</StyledSpan>&nbsp;&nbsp; Skills</Button>
                    </Link>
                    <Link to='projects' smooth={true} duration={500} offset={-100}>
                        <Button color='inherit' size='large'><StyledSpan>03.</StyledSpan>&nbsp;&nbsp; Projects</Button>
                    </Link>
                    <Link to='certifications' smooth={true} duration={500} offset={-100}>
                        <Button color='inherit' size='large'><StyledSpan>04.</StyledSpan>&nbsp;&nbsp; Certifications</Button>
                    </Link>
                </Box>

            </Toolbar>

        </AppBar>

    </Box>
  );
};

export default NavBar;