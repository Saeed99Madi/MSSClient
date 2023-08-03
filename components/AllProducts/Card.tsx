import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Typography } from '@mui/material';
import { IProduct } from '../../interfaces/IProduct';
import {
  CardContainer,
  CardContent,
  CardImage,
  ProductLink,
  TextContainer,
} from './components.styled';

interface CardProps {
  product: IProduct;
}

const Card = ({ product }: CardProps) => {
  const [hover, setHover] = useState<boolean>(false);

  const navigate = useRouter().push;

  return (
    <CardContainer
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <ProductLink
        sx={{
          pb: '15px',
        }}
        onClick={() => {
          navigate(`product/${product.id}`);
        }}
      >
        Check Product
      </ProductLink>

      <CardContent
        sx={{
          height: hover ? 'calc(100% - 50px)' : '100%',
        }}
      >
        <TextContainer
          sx={{
            top: hover ? '100px' : '0',
            gap: '15px',
          }}
        >
          <Typography
            sx={{
              transition: 'all 0.4s ease-in-out',
            }}
          >
            {product?.title}
          </Typography>
          <Typography
            sx={{
              transition: 'all 0.4s ease-in-out',
            }}
          >
            {product?.Category?.title}
          </Typography>
        </TextContainer>
        <CardImage
          sx={{
            height: hover ? '90%' : '70%',
            backgroundImage: `url(${product?.cover})`,
            mt: hover ? null : 'calc(30% + 30px)',
            mb: hover ? 0 : '10px',
          }}
        />
      </CardContent>
    </CardContainer>
  );
};

export default Card;
