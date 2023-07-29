import React, { ChangeEvent } from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { CustomTextField } from './components.styled';
import { IProduct } from '../../interfaces/IProduct';

interface SearchProps {
  searchKey: string | undefined;
  selectedCategory: string | undefined;
  setSearchKey: (category: string) => void;
  setProducts: (products: IProduct[]) => void;
}

const SearchBar: React.FC<SearchProps> = ({ setSearchKey, setProducts }) => {
  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const searchText = event.target.value;
    setSearchKey(searchText);
  };

  return (
    <CustomTextField
      variant="outlined"
      placeholder="Search For Product"
      onChange={handleSearch}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;
