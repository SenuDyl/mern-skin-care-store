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

const RegisterPage = () => {
  const { registration, loading, error } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log('Login data:', data);
    try {
      await registration(data.firstName, data.secondName, data.email, data.password);
      navigate(`/verify`)
    } catch (e) {
      console.error('Login failed:', e);
      alert('Registration failed. Please check your credentials.');
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
          Register
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <TextField
            label="First Name"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
            {...register('firstName', { required: 'First name is required' })}
            error={!!errors.firstName}
            helperText={errors.firstName?.message}
          />

          <TextField
            label="Second Name"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
            {...register('secondName')}
            error={!!errors.secondName}
            helperText={errors.secondName?.message}
          />

          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Invalid email address',
              },
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
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters',
              },
            })}
            error={!!errors.password}
            helperText={errors.password?.message}
          />

          <Button
            type="submit"
            variant="outlined"
            fullWidth
            sx={{
              borderColor: '#f06292',
              color: '#f06292',
              '&:hover': {
                backgroundColor: '#fce4ec',
                borderColor: '#f06292',
              },
            }}
          >
            SIGN UP
          </Button>
        </form>

        <Typography
          variant="body2"
          sx={{ mt: 3, textAlign: 'center' }}
        >
          Already have an account?{' '}
          <Link href="/login" underline="hover" sx={{ color: '#f06292' }}>
            Log in
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default RegisterPage;
