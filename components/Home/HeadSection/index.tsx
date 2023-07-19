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
        <Image src={`${BASE_UEL}settings/Group.png`} alt="logo" />
        <HeadText>SOLAR MSS INVERTER</HeadText>
        <HeadParagraph>ENGINEERED FOR SOLAR</HeadParagraph>
      </LogoWrapper>
      <ImageWrapper />
    </HeadContainer>
  );
};

export default HeadSection;
