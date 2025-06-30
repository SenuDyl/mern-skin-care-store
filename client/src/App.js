import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useMemo } from 'react'; //improve performance by memoizing the result of a function and only recalculating it when necessary
import { useSelector } from 'react-redux';
import HomePage from './scenes/HomePage';
import ProductPage from './scenes/ProductPage';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { themeSettings } from './theme';
import SampleForm from './scenes/SampleForm';
import CategoryPage from './scenes/CategoryPage';
import CartPage from './scenes/CartPage';
import CheckoutPage from './scenes/CheckoutPage';

function App() {
  const theme = useMemo(() => createTheme(themeSettings("light")), ["light"]);
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>

          <Route path="/home" element={<HomePage />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/" element={<SampleForm />} />

        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
