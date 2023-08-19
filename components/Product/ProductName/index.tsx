import { Dispatch, SetStateAction, useEffect } from 'react';
import { Box, Grid } from '@mui/material';
import { IProduct } from '../../../interfaces/IProduct';

import ProductDetails from './ProductDetails';

import ProductDetailsCarousel from '../product-details-carousel';

const ProductName = ({
  product,
  setProduct,
}: {
  product: IProduct;
  setProduct: Dispatch<SetStateAction<IProduct | undefined>>;
}) => {
  useEffect(() => {
    if (!product.cover) {
      return;
    }
    console.log(product);

    const newProduct = product;
    newProduct.productGallery.unshift({
      id: 999,
      image: product.cover,
    });
    setProduct(newProduct);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1rem',
        height: '70% !important',
      }}
    >
      <Grid
        sx={{
          marginTop: '0 !important',
          marginLeft: '0 !important',
          maxWidth: '80% !important',
        }}
        container
        spacing={{ xs: 3, md: 8, lg: 8 }}
      >
        <Grid xs={12} md={4} lg={7}>
          <ProductDetailsCarousel product={product} />
        </Grid>
        <Grid xs={12} md={6} lg={5}>
          <ProductDetails product={product} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductName;
