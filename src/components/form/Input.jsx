import { OutlinedInput, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';

function Input({ fullWidth = true, ...props }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  //const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <OutlinedInput
      fullWidth={fullWidth}
      size={isMobile ? 'small' : 'medium'} // Tamanho responsivo
      sx={{
        // Estilos responsivos
        fontSize: {
          xs: '0.875rem', // mobile
          sm: '0.9rem',   // tablet pequeno
          md: '1rem',     // tablet grande/desktop
        },
        '& .MuiOutlinedInput-input': {
          padding: {
            xs: '10px 12px', // mobile
            sm: '12px 14px', // tablet
            md: '14px 16px', // desktop
          },
        },
        ...props.sx
      }}
      {...props}
    />
  );
}

export default Input;