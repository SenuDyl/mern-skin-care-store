import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useMemo } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { themeSettings } from './theme';
import HomePage from './scenes/HomePage';
import ProductPage from './scenes/ProductPage';
import CategoryPage from './scenes/CategoryPage';
import CartPage from './scenes/CartPage';
import CheckoutPage from './scenes/CheckoutPage';
import LoginPage from './scenes/LoginPage';
import RegisterPage from './scenes/RegisterPage';
import { AuthProvider } from './hooks/AuthContext'; // Make sure this is imported
import VerifyPage from './scenes/VerifyPage';
import { CartProvider } from './hooks/CartContext';

function App() {
  const theme = useMemo(() => createTheme(themeSettings("light")), []);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AuthProvider>
          <CartProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products/:id" element={<ProductPage />} />
            <Route path="/category" element={<CategoryPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/verify" element={<VerifyPage />} />
          </Routes>
          </CartProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
