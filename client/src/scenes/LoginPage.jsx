import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Link,
} from '@mui/material';
import { useAuth } from '../hooks/AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const { login, loading, error } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log('Login data:', data);
    try {
      await login(data.email, data.password);
      navigate(`/`)
      alert('Logged in successfully!');
    } catch (e) {
      console.error('Login failed:', e);
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#fafafa"
    >
      <Typography
        variant="h1"
        sx={{ color: '#f06292', letterSpacing: 1, mb: 2, fontWeight: 600 }}
      >
        EverGlow
      </Typography>

      <Paper elevation={0} sx={{ p: 5, width: 360 }}>
        <Typography variant="h5" sx={{ mb: 3, fontWeight: 500 }}>
          Login
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
            {...register('email', {
              required: 'Email is required',
            })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />

          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            sx={{ mb: 3 }}
            {...register('password', {
              required: 'Password is required',
            })}
            error={!!errors.password}
            helperText={errors.password?.message}
          />

          <Button
            type="submit"
            variant="outlined"
            fullWidth
            disabled={loading}
            sx={{
              borderColor: '#f06292',
              color: '#f06292',
              '&:hover': {
                backgroundColor: '#fce4ec',
                borderColor: '#f06292',
              },
            }}
          >
            {loading ? 'Logging in...' : 'LOG IN'}
          </Button>
        </form>

        <Typography
          variant="body2"
          sx={{ mt: 3, textAlign: 'center' }}
        >
          Don’t have an account?{' '}
          <Link href="/register" underline="hover" sx={{ color: '#f06292' }}>
            Sign up
          </Link>
        </Typography>

        {error && (
          <Typography variant="body2" color="error" sx={{ mt: 2 }}>
            {error}
          </Typography>
        )}
      </Paper>
    </Box>
  );
};

export default LoginPage;
