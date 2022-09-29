import * as React from 'react';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import PedalBikeIcon from '@mui/icons-material/PedalBike';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import CustomMap from "./components/CustomMap";

const theme = createTheme();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
    <AppBar position="relative">
    <Toolbar>
    <PedalBikeIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Red de Bicicletas
          </Typography>
          <Button variant="contained">Hello World</Button>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
        <Typography component="h1" variant="h4" align="center">
            Mapa de las bicicletas
          </Typography>
          <div>
          <CustomMap />
        </div>
        </Paper>
        </Container>
  </ThemeProvider>
  );
}

