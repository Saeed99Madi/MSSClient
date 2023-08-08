import { useEffect, useState } from 'react';
/* eslint-disable react/jsx-curly-brace-presence */
import Link from 'next/link';

import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Typography } from '@mui/material';

import { NavHeader } from './NavHeader';
import { Logo } from './Logo';
import { Actions } from './Actions';

import {
  ContactContainer,
  HeaderContainer,
  StyledHeader,
  TextContainer,
} from './components.styled';
import { SocialList } from '../Footer/components.styled';
import { Axios } from '../../config';

const Header = () => {
  const [whatsNumber, setWhatsNumber] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const getWhatsNumber = async () => {
    try {
      const { data } = await Axios.get('/adminData');
      setWhatsNumber(data.data.phone);
      setEmail(data.data.email);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWhatsNumber();
  }, []);

  return (
    <HeaderContainer>
      <ContactContainer>
        <TextContainer sx={{ m: '0 40px' }}>
          <Typography
            sx={{
              fontSize: '14px',
              '@media screen and (max-width: 850px)': {
                fontSize: '10px',
              },
            }}
          >
            MAIL US: {email}
          </Typography>
          <Typography
            sx={{
              fontSize: '14px',
              '@media screen and (max-width: 850px)': {
                fontSize: '10px',
              },
            }}
          >
            CALL US: {whatsNumber}
          </Typography>
        </TextContainer>
        <SocialList
          style={{
            width: 'fit-content',
            margin: '0 40px',
            gap: '1rem',
          }}
        >
          <Link href="/">
            <FacebookIcon sx={{ color: '#fff', fontSize: '2rem' }} />
          </Link>
          <Link href="/">
            <GoogleIcon sx={{ color: '#fff', fontSize: '2rem' }} />
          </Link>
          <Link href="/">
            <TwitterIcon sx={{ color: '#fff', fontSize: '2rem' }} />
          </Link>
        </SocialList>
      </ContactContainer>
      <StyledHeader>
        <Logo />
        <NavHeader />
        <Actions />
      </StyledHeader>
    </HeaderContainer>
  );
};

export default Header;
