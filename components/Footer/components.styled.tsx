import { Box, Button, Typography,styled } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';

const FooterContainer = styled('footer')({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '2rem',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '2rem',
  height: 'auto',
  '@media screen and (max-width: 850px)': {
    height: '70vh',
  },
});
const SubscribeContainer = styled('div')({
  position: 'relative',
  display: 'flex',
  width: '40rem',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '4rem 0',
  flexDirection: 'column',
  marginTop: '1.5rem',
  '@media screen and (max-width: 850px)': {
    width: '20rem',
    padding: '1rem',
    marginTop: '1.5rem',
  },
});
const InputContainer = styled('div')({
  display: 'flex',
  width: '100%',
  padding: '0.5rem 0.5rem',
  justifyContent: 'space-between',
  alignItems: 'center',
  zIndex: '0',
  background: '#FFFFFF',
  borderRadius: '50px',
  boxShadow:
    '0px 8px 16px rgba(8, 35, 48, 0.08), 0px 24px 32px rgba(8, 35, 48, 0.08)',
  '@media screen and (max-width: 850px)': {
    width: '100%',
  },
});
const SocialList = styled('div')({
  display: 'flex',
  gap: '0.2rem',
  justifyContent: 'center',
  alignItems: 'center',
  '@media screen and (max-width: 850px)': {
    display: 'none',
  },
});
const IconWrapper = styled('div')({
  '@keyframes spin': {
    from: {
      transform: 'rotate(0deg)',
    },
    to: {
      transform: 'rotate(360deg)',
    },
  },
  animation: 'spin infinite 20s linear',
  zIndex: '-1',
  position: 'absolute',
  top: '0',
  right: '1%',
  height: '6rem',
  width: '8rem',
  textAlign: 'center',
  padding: '2rem',
  borderRadius: '70% 50% 40% 50%',
  background: 'linear-gradient(90deg, #FF5362 0%, #E52535 100%)',
  '@media screen and (max-width: 850px)': {
    height: '3rem',
    width: '4rem',
    top: '0.5rem',
    right: '0',
    padding: '0.8rem',
    // padding: '1rem',
  },
});
const RedButton = styled(Button)({
  background: 'linear-gradient(90deg, #FF5362 0%, #E52535 100%)',
  borderRadius: '50px',
  padding: '0.5rem 2rem',
  textTransform: 'none',
  color: '#FFFFFF',
  '@media screen and (max-width: 850px)': {
    padding: '0.2rem 1.5rem',
    fontSize: '0.5rem',
  },
});
const CustomEmailIcon = styled(EmailIcon)({
  '@media screen and (max-width: 850px)': {
    fontSize: '1rem',
  },
});

const FooterBox = styled(Box)({
  padding: "3rem 0",
  height: 'auto',
  backgroundColor: '#141418',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  '@media screen and (max-width: 850px)': {
    height: '70%',
  },
});

const AboutFooter = styled(Box)({
  flexWrap: "wrap",
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: '2rem',
  width: '90%',
  '@media screen and (max-width: 850px)': {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '2rem',
  },
});

const FooterLogo = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  flexDirection: 'column',
  width: '30%',
  '@media screen and (max-width: 850px)': {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const ContactFooter = styled(Box)({
  width: '25rem',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  flexDirection: 'column',
  gap: '1rem',
  '@media screen and (max-width: 850px)': {
    fontSize: '0.5rem',
  },
});

const ContactInfo = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  flexDirection: 'column',
  gap: '0.5rem',
  '@media screen and (max-width: 850px)': {
    fontSize: '0.5rem',
  },
});

const Last = styled(Box)({
  display: 'flex',
  width: '70%',
  paddingLeft: '9rem',
  justifyContent: 'space-between',
  '@media screen and (max-width: 850px)': {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    justifyContent: 'space-evenly',
    width: '100%',
    paddingLeft: '4em',
  },
});

const Links = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-start',
  flexDirection: 'column',
});

const SubscribeTitle = styled(Typography)({
  position: 'absolute',
  top: '-25%',
  left: '7%',
  color: '#141417',
  '@media screen and (max-width: 850px)': {
    fontSize: '1rem',
    top: '-35%',
  },
});

export {
  FooterContainer,
  SubscribeContainer,
  InputContainer,
  SocialList,
  IconWrapper,
  RedButton,
  CustomEmailIcon,
  FooterBox,
  AboutFooter,
  FooterLogo,
  ContactFooter,
  ContactInfo,
  Last,
  Links,
  SubscribeTitle,
};
