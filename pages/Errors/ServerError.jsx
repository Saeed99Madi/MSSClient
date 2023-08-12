import React from 'react';
import { useRouter } from 'next/router';
import { Box, styled } from '@mui/material';

const StyledButton = styled('button')({
  background: 'transparent',
  border: '2px solid #F64252',
  color: '#F64252',
  padding: '5px 15px',
  fontSize: '1.25em',
  transition: 'all 0.15s ease',
  borderRadius: '5px',
  '&:hover': {
    background: '#F64252',
    border: '2px solid #F64252',
    color: '#111',
    cursor: 'pointer',
    transform: 'scale(1.05)',
  },
});
const ServerError = () => {
  const router = useRouter();
  return (
    <Box
      sx={{
        mt: '6em',
        textAlign: 'center',
        width: '100%',
        height: '60vh',
      }}
    >
      <h1
        style={{
          margin: '20px 0',
          lineHeight: 0.8,
          fontWeight: 700,
          color: '#F64252',
          fontSize: '8em',
        }}
      >
        500
      </h1>
      <h3
        style={{
          margin: 0,
          lineHeight: 0.8,
          fontWeight: 300,
          color: '#151518',
          fontSize: '2.5em',
        }}
      >
        Server Error
      </h3>
      <h2
        style={{
          lineHeight: 0.8,
          fontWeight: 300,
          color: '#151518',
          margin: '30px 0',
        }}
      >
        It&apos;s not you, it&apos;s me.
      </h2>
      <StyledButton onClick={() => router.back()}>Go Back</StyledButton>
    </Box>
  );
};

export default ServerError;
