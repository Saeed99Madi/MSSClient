import { ReactNode } from 'react';
import Head from 'next/head';

// import { GetStaticProps } from 'next';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { ICategory } from '../interfaces/ICategory';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>MSS, mooie sterk solar</title>
        <meta name="description" content="Offering top-quality inverters, inverters, solar panels, batteries, and other solar energy products." />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
