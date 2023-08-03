import { useEffect, useState } from 'react';
import { Stack } from '@mui/system';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { Axios } from '../../config';
import { IProduct } from '../../interfaces/IProduct';
import { ICategory } from '../../interfaces/ICategory';

import {
  HeadContainer,
  HeadText,
  HeadParagraph,
  SearchWrapper,
  VerticalLine,
  ProductPageWrapper,
  CardsWrapper,
  CustomArrowBackIcon,
  CustomArrowForwardIcon,
} from '../../components/AllProducts/components.styled';
import SearchBar from '../../components/AllProducts/Search';
import Select from '../../components/AllProducts/Select';
import Loader from '../../components/Loader';
import NoDataFound from '../../components/NoDataFound';
import Card from '../../components/AllProducts/Card';

const AllProduct = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isGetData, setIsGetData] = useState<boolean>(false);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(
    '',
  );
  const [searchKey, setSearchKey] = useState<string | undefined>('');

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number,
  ) => {
    setCurrentPage(page);
    setProducts([]);
  };

  useEffect(() => {
    (async () => {
      const response = await Axios.get('/categories');
      setCategories(response.data.data);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const response = await Axios.get(
          `/products/client?limit=10&page=${currentPage}&CategoryId=${selectedCategory}&search=${searchKey}`,
        );
        setProducts(response.data.data);
        setTotalPage(Math.ceil(response.data.totalCount / 10));
        setIsLoading(false);
        if (response.data.data.length) {
          setIsGetData(true);
        } else {
          setIsGetData(false);
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log('Error occurred while fetching data:', error);
        setIsLoading(false);
      }
    })();
  }, [currentPage, selectedCategory, searchKey]);

  return (
    <ProductPageWrapper>
      <HeadContainer>
        <HeadText>Mooie Sterk Solar</HeadText>
        <HeadParagraph>
          We deliver Solar products to all Countries, Check Our Products & Enjoy
        </HeadParagraph>
        <SearchWrapper>
          <SearchBar
            setSearchKey={setSearchKey}
            selectedCategory={selectedCategory}
            searchKey={searchKey}
            setProducts={setProducts}
          />
          <VerticalLine />
          <Select
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            searchKey={searchKey}
            setProducts={setProducts}
            setCurrentPage={setCurrentPage}
          />
        </SearchWrapper>
      </HeadContainer>
      <CardsWrapper>
        {isLoading && <Loader />}
        {!isGetData ? (
          <NoDataFound />
        ) : (
          products?.map((product: IProduct) => (
            <Card key={product.id} product={product} />
          ))
        )}
      </CardsWrapper>
      <Stack
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'row',
          margin: '30px auto',
        }}
        spacing={2}
      >
        <Pagination
          count={totalPage}
          page={currentPage}
          onChange={handlePageChange}
          renderItem={item => (
            <PaginationItem
              slots={{
                previous: CustomArrowBackIcon,
                next: CustomArrowForwardIcon,
              }}
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...item}
              sx={{
                '&.Mui-selected': {
                  color: '#F23D4C',
                  backgroundColor: '#fff',
                  fontSize: '1.1rem',
                },
              }}
            />
          )}
        />
      </Stack>
    </ProductPageWrapper>
  );
};

export default AllProduct;
