import { Button, styled } from '@mui/material';

const HeadContainer = styled('section')({});

const HeadText = styled('h1')({
  fontFamily: 'Cairo',
  fontWeight: 700,
  fontSize: '48px',
  width: '60%',
  textAlign: 'center',
  '@media screen and (max-width: 850px)': {
    fontSize: '24px',
  },
});

const HeadParagraph = styled('h1')({
  width: '90%',
  fontSize: '24px',
  textAlign: 'center',
  color: '#666',
  '@media screen and (max-width: 850px)': {
    fontSize: '12px',
    width: '70%',
  },
});
const CenterdFlexContainer = styled('h1')({
  display: 'flex',
  justifyItems: 'flex-start',
  alignItems: 'center',
  gap: '1rem',
  flexWrap: 'wrap',
});
const CustomButtonCheck = styled(Button)({
  pl: '2rem',
  pr: '2rem',
  textTransform: 'none',
  borderRadius: '50px',
  color: '#FFFFFF',
  background: 'linear-gradient(90deg, #FF5362 0%, #E52535 100%)',
});
const CustomButtonWho = styled(Button)({
  textTransform: 'none',
  borderRadius: '50px',
  border: '1px solid ',
  color: '#161619',
});
const ServiceCard = styled('div')({
  width: '80%',
  display: 'flex',
  justifyContent: 'center',
  padding: '1rem',
  borderRadius: '40px',
  alignItems: 'center',
  gap: '1rem',
  background: '#FFFFFF',
  boxShadow:
    '0px 6px 12px rgba(8, 35, 48, 0.1), 0px 16px 24px rgba(8, 35, 48, 0.04)',
  '@media screen and (max-width: 850px)': {
    gap: '0.2rem',
  },
});

const CardParagraph = styled('p')({
  fontFamily: 'Cairo',
  fontWeight: 500,
  fontSize: '24px',
  width: '100%',
  color: '#EFB92A',
  textAlign: 'center',
  marginTop: '0',
  '@media screen and (max-width: 850px)': {
    fontSize: '16px',
  },
});

const CardHdParagraph = styled('p')({
  marginTop: '0',
  width: '70%',
  fontSize: '16px',
  textAlign: 'center',
  '@media screen and (max-width: 850px)': {
    fontSize: '11px',
    width: '100%',
  },
});
const CardButton = styled(Button)({
  height: '2.5rem',
  padding: '0.5rem 1.5rem',
  textTransform: 'none',
  background: 'linear-gradient(90.9deg, #1F1F22 0.72%, #141417 99.18%);',
  borderRadius: '50px',
  border: '1px solid ',
  color: '#FFFFFF',
  '@media screen and (max-width: 850px)': {
    padding: '0rem 1rem',
    width: '7rem',
    fontSize: '8px',
  },
});
const Imagecustom = styled('img')({
  width: '25%',
  height: 'auto',
  // height: '100px',
  '@media screen and (max-width: 850px)': {
    height: 'auto',
  },
});

const LogoWrapper = styled('div')({
  height: '50vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
});

const ImageWrapper = styled('div')({
  minHeight: '100vh',
  background:
    'url("https://res.cloudinary.com/dxkdwp3w3/image/upload/v1688565578/ynzbhraa7fpbawhx5uj1.png")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  marginTop: '50px',
  '@media screen and (max-width: 768px)': {
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    minHeight: '50vh',
  },

  '@media screen and (max-width: 480px)': {
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
  },
});

const Image = styled('img')({
  width: '200px',
  height: '200px',
  marginBottom: '0rem',

  '@media screen and (max-width: 768px)': {
    width: '150px',
    height: '150px',
  },
});

export {
  Imagecustom,
  HeadContainer,
  HeadText,
  HeadParagraph,
  CenterdFlexContainer,
  CustomButtonCheck,
  CustomButtonWho,
  ServiceCard,
  CardParagraph,
  CardHdParagraph,
  CardButton,
  LogoWrapper,
  ImageWrapper,
  Image,
};
