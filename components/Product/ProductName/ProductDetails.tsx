import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { Stack } from '@mui/material';
import { Axios, BASE_UEL } from '../../../config';
import { IProduct } from '../../../interfaces/IProduct';
import {
  ProductDetailsWrapper,
  CategoryTag,
  DownloadButton,
  ContactButton,
  ButtonsWrapper,
} from '../components.styled';

const ProductDetails = ({ product }: { product: IProduct }) => {
  const [categoryName, setCategoryName] = useState('');
  const router = useRouter();
  const getCategories = async () => {
    const { data } = await Axios.get(`categories/show/${product.CategoryId}`);
    setCategoryName(data.data.title);
  };
  useEffect(() => {
    if (product) {
      try {
        getCategories();
      } catch (error) {
        router.push('/Errors/ServerError');
      }
    }
  }, [product]);
  return (
    <Stack sx={{ alignItems: 'center' }}>
      <div>
        {categoryName ? <CategoryTag>{categoryName}</CategoryTag> : null}
        <h1>{product.title}</h1>
        <p>{product.description}</p>
      </div>
      <ButtonsWrapper>
        {product.catalog ? (
          <Link href={product.catalog} style={{ textDecoration: 'none' }}>
            <DownloadButton startIcon={<FileDownloadIcon />}>
              Download Catalog
            </DownloadButton>
          </Link>
        ) : null}
        <Link href="/#contact" style={{ textDecoration: 'none' }}>
          <ContactButton>contact us</ContactButton>
        </Link>
      </ButtonsWrapper>
    </Stack>
  );
};

export default ProductDetails;
