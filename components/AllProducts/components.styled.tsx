import { styled, Select, TextField, Box, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ProductPageWrapper = styled('section')({
  position: 'relative',
});

const HeadContainer = styled('section')({
  background:
    'url("https://ik.imagekit.io/a83g0okds/background.png?updatedAt=1685026477005")',
  display: 'flex',
  gap: '1rem',
  justifyContent: 'flex-start',
  flexDirection: 'column',
  alignItems: 'center',
  minHeight: '70vh',
  position: 'relative',
});

const CardsWrapper = styled('section')({
  minHeight: '70vh',
  position: 'relative',
  marginTop: '-7rem',
  display: 'flex',
  gap: '24px',
  flexWrap: 'wrap',
  justifyContent: 'center',
  padding: '0 10%',
  paddingTop: '3rem',
});

const ImageWrapper = styled('div')`
  display: block;
  height: 100%;
  border-radius: 40px;
  margin: 16px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
  }
`;

const HeadText = styled('h1')({
  fontFamily: 'Cairo',
  fontWeight: 700,
  fontSize: '48px',
  width: '60%',
  textAlign: 'center',
  marginTop: '32PX',
  '@media screen and (max-width: 850px)': {
    fontSize: '24px',
  },
  color: '#F3C414',
});

const HeadParagraph = styled('h1')({
  marginTop: '-1%',
  width: '40%',
  fontSize: '24px',
  lineHeight: '33.48px',
  textAlign: 'center',
  '@media screen and (max-width: 850px)': {
    fontSize: '12px',
    width: '70%',
  },
  color: '#555',
});

const CustomTextField = styled(TextField)(({ theme }) => ({
  width: '80%', // Default width for desktop
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
  '&.Mui-focused': {
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
  },
  [theme.breakpoints.down('sm')]: {
    width: '95%', // Full width on mobile devices
  },
}));

const CustomSelect = styled(Select)({
  width: '20%',
  minWidth: '120px',
  paddingLeft: '1rem',
});

const SearchWrapper = styled('div')(({ theme }) => ({
  width: '70%',
  backgroundColor: '#fff',
  borderRadius: '16px',
  boxShadow: '0px 4px 4px 0px #00000040',
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    width: '95%',
  },
}));

const VerticalLine = styled('div')({
  backgroundColor: '#000000',
  width: '2px',
  height: '35px',
});

const CustomArrowBackIcon = styled(ArrowBackIcon)`
  color: red;
`;

const CustomArrowForwardIcon = styled(ArrowForwardIcon)`
  color: red;
`;

const CardContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
  flexDirection: 'column',
  maxWidth: '250px',
  height: '350px',
  position: 'relative',
  border: '1px solid #ccc',
  backgroundColor: '#f1f1f1',
  borderRadius: '40px',
  flex: '1 1 200px',
  transition: 'all 0.4s ease-in-out',
});

const ProductLink = styled(Typography)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
  backgroundColor: '#1F1F22',
  width: '100%',
  height: '100px',
  borderBottomLeftRadius: '40px',
  borderBottomRightRadius: '40px',
  position: 'absolute',
  left: '0',
  bottom: '0',
  transition: 'all 0.4s ease-in-out',
  cursor: 'pointer',
});

const CardContent = styled(Box)({
  width: '100%',
  position: 'absolute',
  top: '0',
  left: '0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  backgroundColor: '#f1f1f1',
  borderRadius: '40px',
  transition: 'all 0.4s ease-in-out',
});

const CardImage = styled(Box)({
  width: '93%',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  borderRadius: '40px',
  transition: 'all 0.6s ease-in-out',
  zIndex: '1',
});

const TextContainer = styled(Box)({
  width: '100%',
  height: '30%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  transition: 'all 0.4s ease-in-out',
  position: 'absolute',
  left: '50%',
  transform: 'translate(-50%)',
})

export {
  HeadContainer,
  HeadText,
  HeadParagraph,
  CustomTextField,
  SearchWrapper,
  CustomSelect,
  VerticalLine,
  ProductPageWrapper,
  CardsWrapper,
  ImageWrapper,
  CustomArrowBackIcon,
  CustomArrowForwardIcon,
  CardContainer,
  ProductLink,
  CardContent,
  CardImage,
  TextContainer
};
