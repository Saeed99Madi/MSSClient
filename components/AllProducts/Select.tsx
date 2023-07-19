import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import { ICategory } from '../../interfaces/ICategory';
import { IProduct } from '../../interfaces/IProduct';

interface SelectProps {
  categories: ICategory[];
  selectedCategory?: string;
  searchKey?: string;
  setSelectedCategory: (category: string) => void;
  setCurrentPage: (currentPage: number) => void;
  setProducts: (products: IProduct[]) => void;
}

const categoryItem = {
  fontStyle: 'italic',
  fontWeight: 'bold',
  margin: '5px 0px',
  color: '#000000',
  opacity: '1 !important',
};

const SelectCategories: React.FC<SelectProps> = ({
  categories,
  setSelectedCategory,
  selectedCategory,
  setCurrentPage,
}) => {
  const { t } = useTranslation('home');

  const handleChange = (event: SelectChangeEvent<string>) => {
    setSelectedCategory(event.target.value);
    setCurrentPage(1);
  };

  return (
    <Select
      value={selectedCategory}
      disableUnderline
      variant="standard"
      displayEmpty
      sx={{
        fontSize: '0.9em',
        border: 0,
        color: '#000000',
        boxShadow: 'none',
        '.MuiOutlinedInput-notchedOutline': { border: 0 },
        width: '20%',
        minWidth: '120px',
        paddingLeft: '1rem',
      }}
      inputProps={{ 'aria-label': 'Select a category' }}
      onChange={handleChange}
    >
      <MenuItem value="" disabled>
        {t('Categories')}
      </MenuItem>
      {categories.map((category: ICategory) => (
        <MenuItem key={category.id} value={category.id} sx={categoryItem}>
          {category.title}
        </MenuItem>
      ))}
    </Select>
  );
};

export default SelectCategories;
