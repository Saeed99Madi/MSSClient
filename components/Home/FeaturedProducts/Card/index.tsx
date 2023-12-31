import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Box, Typography } from '@mui/material';
import { Axios } from '../../../../config';
import { IProduct } from '../../../../interfaces/IProduct';
import { ImageCard } from '../components.styled';

const Card = ({ product }: { product: IProduct }) => {
  const [categoryName, setCategoryName] = useState('');
  const router = useRouter();
  const getCategories = async () => {
    try {
      const { data } = await Axios.get(`categories/show/${product.CategoryId}`);
      setCategoryName(data.data.title);
    } catch (error) {
      router.push('/Errors/ServerError');
    }
  };
  useEffect(() => {
    getCategories();
  }, [product]);
  return (
    <ImageCard
      sx={{
        borderRadius: '3px',
      }}
      key={product.id}
    >
      <Box sx={{ width: '100.5%' }} className="overview">
        <Typography
          sx={{
            fontSize: '14px',
            margin: '0',
            paddingLeft: '0.3rem',
            '& > a': { textDecoration: 'none', color: '#f6b400' },
          }}
          paragraph
        >
          <Link href={`product/${product.id}`}>{product.title}</Link>
        </Typography>
        <Typography
          sx={{ fontSize: '8px', margin: '0', paddingLeft: '0.3rem' }}
          paragraph
        >
          {categoryName}
        </Typography>
      </Box>
      <img
        src={product.cover}
        srcSet={product.cover}
        alt={product.title}
        loading="lazy"
      />
    </ImageCard>
  );
};

export default Card;
