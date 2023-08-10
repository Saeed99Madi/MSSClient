/* eslint-disable no-restricted-globals */
/* eslint-disable react/jsx-curly-brace-presence */
import { ChangeEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { AxiosError } from 'axios';

import {
  Box,
  Grid,
  Input,
  InputAdornment,
  Link,
  Tooltip,
  Typography,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import {
  AboutFooter,
  ContactFooter,
  ContactInfo,
  CustomEmailIcon,
  FooterBox,
  FooterContainer,
  FooterLogo,
  IconWrapper,
  InputContainer,
  RedButton,
  SocialList,
  SubscribeContainer,
} from './components.styled';
import { Axios } from '../../config';

const LinkStyle = {
  color: '#CCC',
  textDecoration: 'none',
  cursor: 'pointer',
  padding: '0.5rem',
  width: 'fit-content',
  '@media screen and (max-width: 850px)': {
    fontSize: '0.5rem',
  },
};

interface IAdmin {
  email: string;
  phone: string;
  address: string;
  bio: string;
}
const Footer = () => {
  const [email, setEmail] = useState<string>('');
  const [success, setSuccess] = useState<string>('');
  const [error, setError] = useState<string>('');
  const router = useRouter();

  const [admin, setAdmin] = useState<IAdmin>({} as IAdmin);

  const getWhatsNumber = async () => {
    try {
      const { data } = await Axios.get('/adminData');
      setAdmin(data.data);
    } catch (err) {
      router.push('/Errors/ServerError');
    }
  };

  const handleSubscribe = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setEmail(event.target.value);
    setError('');
  };

  const sendEmail = async () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailRegex.test(email as string)) {
      try {
        const { data } = await Axios.post('/subscribe', { email });
        if (data.status === 201) {
          setEmail('');
          setSuccess('Subscribe successfully');
        } else {
          setError(data.data as string);
        }
      } catch (err) {
        if ((err as AxiosError).response?.status === 400) {
          setError(
            ((err as AxiosError).response?.data as { msg: string })
              ?.msg as string,
          );
        } else {
          router.push('/Errors/ServerError');
        }
      }
    } else {
      setError('Please write a valid email');
    }
    setTimeout(() => {
      setSuccess('');
    }, 2000);
  };

  const menuDisActive = (path: string) => {
    if (location.pathname === '/' && path === '/') {
      location.href = '#home';
    } else if (location.pathname !== '/') {
      location.href = `/${path}`;
    } else {
      location.href = path;
    }
  };

  useEffect(() => {
    getWhatsNumber();
  }, []);
  return (
    <FooterContainer>
      <SubscribeContainer>
        <InputContainer>
          <Input
            disableUnderline
            placeholder="example@gmail.com"
            onChange={handleSubscribe}
            type="email"
            value={email}
            startAdornment={
              <InputAdornment position="start">
                <CustomEmailIcon />
              </InputAdornment>
            }
          />
          <RedButton onClick={() => sendEmail()}>Subscribe Now</RedButton>
        </InputContainer>
        <IconWrapper />
        {success && (
          <Typography
            sx={{
              m: '10px 0 0 40px',
              color: 'green',
            }}
          >
            {success}
          </Typography>
        )}
        {error && (
          <Typography
            sx={{
              m: '10px 0 0 40px',
              color: 'red',
            }}
          >
            {error}
          </Typography>
        )}
      </SubscribeContainer>
      <FooterBox sx={{ m: '0' }}>
        <AboutFooter>
          <FooterLogo
            sx={{
              mt: '-1rem',
            }}
          >
            <img
              src="https://res.cloudinary.com/dt0jfo5xi/image/upload/v1689850157/msr87v9ann0kh1mskum2.png"
              alt="logo"
              style={{
                width: '100px',
              }}
            />
            {admin && (
              <Typography
                sx={{
                  color: '#CCC',
                  marginBottom: '1em',
                }}
              >
                {admin.bio}
              </Typography>
            )}
            <SocialList style={{ display: 'flex' }}>
              <Link href="/">
                <FacebookIcon sx={{ color: '#1877F2', fontSize: '2rem' }} />
              </Link>
              <Link href="/">
                <GoogleIcon sx={{ color: '#EA4335', fontSize: '2rem' }} />
              </Link>
              <Link href="/">
                <TwitterIcon sx={{ color: '#55ACEE', fontSize: '2rem' }} />
              </Link>
            </SocialList>
          </FooterLogo>
          <Box sx={{ width: '30%', color: '#FFFFFF' }}>
            <Box sx={{ mb: '1rem' }}>
              <Typography
                sx={{
                  color: '#FFFFFF',
                  '@media screen and (max-width: 850px)': {
                    fontSize: '0.5rem',
                  },
                }}
              >
                Useful links
              </Typography>
            </Box>
            <Grid container justifyContent="center" direction={'column'}>
              <Grid item>
                <Tooltip disableFocusListener title="Home">
                  <Typography sx={LinkStyle} onClick={() => menuDisActive('/')}>
                    Home
                  </Typography>
                </Tooltip>
              </Grid>
              <Grid item>
                <Tooltip disableFocusListener title="Contact">
                  <Typography
                    sx={LinkStyle}
                    onClick={() => menuDisActive('#contact')}
                  >
                    Contact Us
                  </Typography>
                </Tooltip>
              </Grid>

              <Grid item>
                <Tooltip disableFocusListener title="About Us">
                  <Typography
                    sx={LinkStyle}
                    onClick={() => menuDisActive('#services')}
                  >
                    who we are
                  </Typography>
                </Tooltip>
              </Grid>
            </Grid>
          </Box>
          <ContactFooter>
            <Typography
              sx={{
                color: '#FFFFFF',
                '@media screen and (max-width: 850px)': {
                  fontSize: '0.5rem',
                },
              }}
            >
              Contact Us
            </Typography>
            <ContactInfo>
              {admin && (
                <>
                  <Typography
                    sx={{
                      color: '#FFFFFF',
                      '@media screen and (max-width: 850px)': {
                        fontSize: '0.5rem',
                      },
                    }}
                  >
                    {admin.address}
                  </Typography>
                  <Typography
                    sx={{
                      color: '#FFFFFF',
                      '@media screen and (max-width: 850px)': {
                        fontSize: '0.5rem',
                      },
                    }}
                  >
                    {admin.email}
                  </Typography>
                  <Typography
                    sx={{
                      color: '#FFFFFF',
                      '@media screen and (max-width: 850px)': {
                        fontSize: '0.5rem',
                      },
                    }}
                  >
                    {admin.phone}
                  </Typography>
                </>
              )}
            </ContactInfo>
          </ContactFooter>
        </AboutFooter>
        <Typography
          sx={{
            color: '#FFFFFF',
            backgroundColor: '#141418',
            fontSize: '0.7rem',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            height: '2rem',
            mt: '1rem',
            '@media screen and (max-width: 850px)': {
              fontSize: '0.5rem',
            },
          }}
          paragraph
        >
          All Rights Are Reserveed By MSS. By Dev. Said Madi
        </Typography>
      </FooterBox>
    </FooterContainer>
  );
};

export default Footer;
