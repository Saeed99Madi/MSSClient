import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Box, Typography } from '@mui/material';
import { IProduct } from '../../interfaces/IProduct';

interface CardProps {
  product: IProduct;
}

const Card = ({ product }: CardProps) => {
  const [hover, setHover] = useState<boolean>(false);

  const navigate = useRouter().push;

  return (
    <Box
      sx={{
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
      }}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <Typography
        sx={{
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
          pb: '15px',
          cursor: 'pointer',
        }}
        onClick={() => {
          navigate(`product/${product.id}`);
        }}
      >
        Check Product
      </Typography>

      <Box
        sx={{
          width: '100%',
          height: hover ? 'calc(100% - 50px)' : '100%',
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
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '30%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            transition: 'all 0.4s ease-in-out',
            position: 'absolute',
            top: hover ? '100px' : '0',
            left: '50%',
            transform: 'translate(-50%)',
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
        </Box>
        <Box
          sx={{
            height: hover ? '90%' : '70%',
            width: '93%',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url(${product?.cover})`,
            borderRadius: '40px',
            transition: 'all 0.6s ease-in-out',
            zIndex: '1',
            mt: hover ? null : 'calc(30% + 30px)',
            mb: hover ? 0 : '10px',
          }}
        />
      </Box>
    </Box>
  );
};

export default Card;
