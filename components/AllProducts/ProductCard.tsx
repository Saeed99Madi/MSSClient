import React, { useState } from 'react';
import Link from 'next/link';
import {
  CardContainer,
  SectionOne,
  SectionThree,
  ImageWrapper,
} from './components.styled';
import { IProduct } from '../../interfaces/IProduct';

interface CardProps {
  product: IProduct;
}

const Card: React.FC<CardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <CardContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <SectionOne className={`section-one ${isHovered ? 'hidden' : ''}`}>
        <h3>{product?.title}</h3>
        <p>{product?.Category?.title}</p>
      </SectionOne>
      <ImageWrapper className="section-two">
        <img src={product?.cover} alt={product?.title} />
      </ImageWrapper>
      <SectionThree
        className={`section-three ${isHovered ? 'displayed' : 'hidden'}`}
      >
        <div />
        <h3>
          <Link href={`product/${product.id}`}>Check Product</Link>
        </h3>
      </SectionThree>
    </CardContainer>
  );
};

export default Card;
