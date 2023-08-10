import { styled } from '@mui/material';

export const StyledButton = styled('button')({
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
