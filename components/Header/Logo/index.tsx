import { Box } from '@mui/material';

import Link from 'next/link';
import { LogoImage } from '../components.styled';
import { BASE_UEL } from '../../../config';

export const Logo = () => (
  <Box className="logo">
    <Link href="/">
      <LogoImage src={`${BASE_UEL}settings/Group.png`} alt="logo" />
    </Link>
  </Box>
);
