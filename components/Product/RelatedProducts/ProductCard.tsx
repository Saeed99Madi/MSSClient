/* eslint-disable prefer-template */
import { FC } from 'react';

import { useRouter } from 'next/router';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

import { IProduct } from '../../../interfaces/IProduct';

const ProductCard: FC<{ product: IProduct }> = ({ product }) => {
  const router = useRouter();
  return (
    <Card
      sx={{
        maxWidth: 350,
        minHeight: 380,
        borderRadius: '40px',
        backgroundColor: ' #F1F1F1',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginLeft: '1.3rem',
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={product.cover}
          alt="green iguana"
          sx={{ borderRadius: '40px' }}
        />
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{
              color: '#1F1F22',
              fontWeight: '700',
              fontSize: '18px',
            }}
          >
            {product.title}
          </Typography>
          <Typography
            color="text.secondary"
            sx={{
              color: '#353C46',
              textAlign: 'center',
              lineHeight: '1.5rem !important',
              fontSize: '1.2rem !important',
            }}
          >
            {product.description.slice(0, 60) + '...'}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          sx={{ color: '#FF5362' }}
          onClick={() => {
            router.push(`/product/${product.id}`);
          }}
        >
          Check Product
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
