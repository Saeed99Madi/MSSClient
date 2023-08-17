/* eslint-disable no-restricted-globals */
/* eslint-disable react/jsx-curly-brace-presence */
import { ChangeEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { AxiosError } from 'axios';

import { Box, Grid, Link, Tooltip, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import {
  AboutFooter,
  ContactFooter,
  ContactInfo,
  FooterBox,
  FooterContainer,
  FooterLogo,
  Last,
  Links,
  SocialList,
} from './components.styled';
import { Axios } from '../../config';
import Subscribe from './Subscribe';

const LinkStyle = {
  color: '#CCC',
  textDecoration: 'none',
  cursor: 'pointer',
  padding: '0.5rem',
  width: 'fit-content',
  '@media screen and (max-width: 850px)': {
    fontSize: '0.5rem',
    padding: '0.2rem',
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
      <Subscribe
        handleSubscribe={handleSubscribe}
        email={email}
        sendEmail={sendEmail}
        success={success}
        error={error}
      />
      <FooterBox sx={{ m: '0' }}>
        <AboutFooter>
          <FooterLogo
            sx={{
              mt: '-1rem',
              justifyContent: {
                xs: 'center',
                sm: 'center',
                l: 'flex-start',
                xl: 'flex-start',
              },
              alignItems: {
                xs: 'center',
                sm: 'centers',
                l: 'flex-start',
                xl: 'flex-start',
              },
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
            <SocialList
              sx={{
                display: 'flex',
                justifyContent: {
                  xs: 'center',
                  sm: 'center',
                  l: 'flex-start',
                  xl: 'flex-start',
                },
                alignItems: {
                  xs: 'center',
                  sm: 'centers',
                  l: 'flex-start',
                  xl: 'flex-start',
                },
              }}
            >
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
          <Last>
            <Box sx={{ width: '30%', color: '#FFFFFF' }}>
              <Box sx={{ mb: '0.5rem' }}>
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
              <Links>
                <Grid item>
                  <Tooltip disableFocusListener title="Home">
                    <Typography
                      sx={LinkStyle}
                      onClick={() => menuDisActive('/')}
                    >
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
              </Links>
            </Box>
            <ContactFooter>
              <Typography
                sx={{
                  color: '#FFFFFF',
                  fontSize: {
                    xs: '0.7rem',
                    sm: '0.8rem',
                    l: '1rem',
                    xl: '1.5rem',
                  },
                  textAlign: {
                    xs: 'center',
                    sm: 'center',
                    l: 'left',
                    xl: 'left',
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
          </Last>
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
