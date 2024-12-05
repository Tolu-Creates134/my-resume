import './App.css';
import Box from '@mui/material/Box';
import NavBar from './sections/NavBar/NavBar';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';
import colors from './styles/colors';
import Hero from './sections/Hero/Hero';
import Skills from './sections/Skills/Skills';
import Projects from './sections/Projects/Projects';
import Certifications from './sections/Certifications/Certifications';
import AboutMe from './sections/AboutMe/AboutMe';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box 
        className="App"
        sx={{
          backgroundColor: colors.background,
          color: colors.textPrimary
        }}
      >
        <NavBar/>
        <Hero/>
        <AboutMe/>
        <Skills/>
        <Projects/>
        <Certifications/>
      </Box>
    </ThemeProvider>
  );
}

export default App;
