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
      <LogoWrapper>
        <Image
          src="https://res.cloudinary.com/dt0jfo5xi/image/upload/v1689850157/msr87v9ann0kh1mskum2.png"
          alt="logo"
        />
        <HeadText sx={{ margin: 0 }}>SOLAR MSS INVERTER</HeadText>
        <HeadParagraph>ENGINEERED FOR SOLAR</HeadParagraph>
      </LogoWrapper>
      <ImageWrapper />
    </HeadContainer>
  );
};

export default HeadSection;
