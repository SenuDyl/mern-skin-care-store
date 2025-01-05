import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useMemo } from 'react'; //improve performance by memoizing the result of a function and only recalculating it when necessary
import { useSelector } from 'react-redux';
import HomePage from './scenes/homePage';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { themeSettings } from './theme';

function App() {
  const theme = useMemo(() => createTheme(themeSettings("light")), ["light"]);
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>

          <Route path="/home" element={<HomePage />} />

        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
