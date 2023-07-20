import { Box } from '@mui/material';

import Link from 'next/link';
import { LogoImage } from '../components.styled';

export const Logo = () => (
  <Box className="logo">
    <Link href="/">
      <LogoImage src={"https://res.cloudinary.com/dt0jfo5xi/image/upload/v1689850157/msr87v9ann0kh1mskum2.png"} alt="logo" />
    </Link>
  </Box>
);
