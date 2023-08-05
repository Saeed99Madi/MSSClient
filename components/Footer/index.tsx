/* eslint-disable no-restricted-globals */
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

const LinkStyle = {
  color: '#000000',
  textDecoration: 'none',
  cursor: 'pointer',
  padding: '1rem',
};
const Footer = () => {
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
            placeholder="Start Now"
            startAdornment={
              <InputAdornment position="start">
                <CustomEmailIcon />
              </InputAdornment>
            }
          />
          <RedButton>Subscripe Now</RedButton>
        </InputContainer>
        <IconWrapper />
      </SubscribeContainer>
      <SocialList>
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
