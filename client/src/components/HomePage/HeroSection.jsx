import { Box, Typography, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles'

const HeroSection = () => {
  const theme = useTheme()
  
  return (
    <Box
      sx={{
        height: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        px: { xs: 2, md: 10 },
        color: 'white',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          zIndex: 0,
        },
      }}
    >
      <Box sx={{ zIndex: 1, maxWidth: 600 }}>
        <Typography variant="subtitle1" sx={{ letterSpacing: 2, mb: 2, color: theme.palette.white.light }}>
          WELCOME TO EVERGLOW STORE
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 300,
            lineHeight: 1.2,
            fontSize: { xs: '4rem', md: '4.5rem' },
            mb: 3,
            color: theme.palette.white.light
          }}
        >
          The Best Skin Cleanser for You
        </Typography>
        <Button
          variant="outlined"
          size="large"
          sx={{
            color: theme.palette.white.light,
            borderColor: theme.palette.white.light,
            fontWeight: 'bold',
            px: 4,
            '&:hover': {
              backgroundColor: theme.palette.white.light,
              color: theme.palette.primary.dark, 
            },
          }}
        >
          SHOP NOW
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSection;
