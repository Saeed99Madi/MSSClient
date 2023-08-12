/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactNode } from 'react';

import { Box } from '@mui/material';

import useTranslation from 'next-translate/useTranslation';
import { GetServerSideProps } from 'next';

import FeaturedProducts from '../components/Home/FeaturedProducts';
import HeadSection from '../components/Home/HeadSection';
import ServicesList from '../components/Home/ServicesList';

import { Axios } from '../config';
import ContactSection from '../components/Home/ContactSection';
import TopCategories from '../components/Home/TopCategories';
import Layout from '../layouts/main';
import { IProduct } from '../interfaces/IProduct';
import ServerError from './Errors/ServerError.jsx';

type Props = {
  products: IProduct[];
  error: any;
};

const Home = (props: Props) => {
  const { t } = useTranslation('home');
  const { products, error } = props;
  if (error) {
    return <ServerError />;
  }
  return (
    <Box sx={{ margin: '0' }}>
      <HeadSection />
      <ServicesList />
      <FeaturedProducts products={products} />
      <TopCategories />
      <ContactSection />
    </Box>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getServerSideProps: GetServerSideProps = async context => {
  try {
    const { data } = await Axios.get('products/published');

    return {
      props: {
        products: data.data,
      },
    };
  } catch (error: unknown) {
    return {
      props: {
        error: { error: 'something went wrong' },
      },
    };
  }
};

Home.getLayout = (page: ReactNode) => <Layout>{page}</Layout>;
export default Home;
