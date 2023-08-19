import Stack from '@mui/material/Stack';

import Divider from '@mui/material/Divider';

import Typography from '@mui/material/Typography';

import { IProduct } from '../../interfaces/IProduct';

// ----------------------------------------------------------------------

type Props = {
  product: IProduct;
};

const ProductDetailsSummary = ({ product, ...other }: Props) => {
  // const router = useRouter();

  const { id } = product;

  // const existProduct = !!items?.length && items.map((item) => item.id).includes(id);

  // const isMaxQuantity =
  //   !!items?.length &&
  //   items.filter((item) => item.id === id).map((item) => item.quantity)[0] >= available;

  const defaultValues = {
    id,
  };

  const renderSubDescription = (
    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
      fddfdfdfdfdfdfdf fdfdfdfd fd fdf df d fdf d dffddfdfdfddf dfd fd fdfdfd
    </Typography>
  );

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Stack spacing={3} sx={{ pt: 3 }} {...other}>
      <Stack spacing={2} alignItems="flex-start">
        <Typography variant="h5">fgfgfgfgf</Typography>

        {renderSubDescription}
      </Stack>

      <Divider sx={{ borderStyle: 'dashed' }} />

      <Divider sx={{ borderStyle: 'dashed' }} />
    </Stack>
  );
};
export default ProductDetailsSummary;
