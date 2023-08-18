import {
  HeadContainer,
  HeadParagraph,
  HeadText,
  LogoWrapper,
  ImageWrapper,
  Image,
} from './components.styled';

const HeadSection = () => {
  return (
    <HeadContainer sx={{ margin: '20px 0 0 0' }} id="home">
      <LogoWrapper sx={{ height: 'auto' }}>
        <Image
          src="https://res.cloudinary.com/dt0jfo5xi/image/upload/v1689850157/msr87v9ann0kh1mskum2.png"
          alt="logo"
        />
        <HeadText sx={{ margin: 0 }}>SOLAR MSS INVERTER</HeadText>
        <HeadParagraph>ENGINEERED FOR SOLAR</HeadParagraph>
      </LogoWrapper>
      <ImageWrapper
        sx={{
          marginTop: { xs: '0', sm: '0', md: '0', l: '0', xl: '0' },
          minHeight: {
            xs: '30vh',
            sm: '50vh',
            md: '50vh',
            l: '100vh',
            xl: '100vh',
          },
        }}
      />
    </HeadContainer>
  );
};

export default HeadSection;
