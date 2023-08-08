/* eslint-disable no-restricted-globals */
import { ChangeEvent, useState } from 'react';

import { AxiosError } from 'axios';

import {
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
  CustomEmailIcon,
  FooterContainer,
  IconWrapper,
  InputContainer,
  RedButton,
  SocialList,
  SubscribeContainer,
} from './components.styled';
import { Axios } from '../../config';

const LinkStyle = {
  color: '#000000',
  textDecoration: 'none',
  cursor: 'pointer',
  padding: '1rem',
};
const Footer = () => {
  const [email, setEmail] = useState<string>('');
  const [success, setSuccess] = useState<string>('');
  const [error, setError] = useState<string>('');

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
          setError('something went wrong!!');
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
  return (
    <FooterContainer>
      <img
        src="https://res.cloudinary.com/dt0jfo5xi/image/upload/v1689850157/msr87v9ann0kh1mskum2.png"
        alt="logo"
        style={{
          width: '100px',
        }}
      />
      <Grid container justifyContent="center">
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
      <Typography
        sx={{
          color: '#666666',
          fontSize: '0.7rem',
          '@media screen and (max-width: 850px)': {
            fontSize: '0.5rem',
          },
        }}
        paragraph
      >
        All Rights Are Reserveed By MSS. By Dev. Said Madi
      </Typography>
    </FooterContainer>
  );
};

export default Footer;
