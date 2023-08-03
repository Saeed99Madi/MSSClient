import { styled, Select, TextField } from '@mui/material';
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
};
