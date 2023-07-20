import {
  HeadContainer,
  HeadParagraph,
  HeadText,
  LogoWrapper,
  ImageWrapper,
  Image,
} from './components.styled';
import { BASE_UEL } from '../../../config';

const HeadSection = () => {
  return (
    <HeadContainer>
      <LogoWrapper>
        <Image src={"https://res.cloudinary.com/dt0jfo5xi/image/upload/v1689850157/msr87v9ann0kh1mskum2.png"} alt="logo" />
        <HeadText>SOLAR MSS INVERTER</HeadText>
        <HeadParagraph>ENGINEERED FOR SOLAR</HeadParagraph>
      </LogoWrapper>
      <ImageWrapper />
    </HeadContainer>
  );
};

export default HeadSection;
