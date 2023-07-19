import { IProduct } from '../../../interfaces/IProduct';
import {
  SectionWithoutPadding,
  FeaturesListWrapper,
  RedSpot,
  YellowSpot,
  RectangularImg,
} from '../components.styled';
import ListItem from './ListItem';

type Attripute = {
  id: string;
  title: string;
  description: string;
  productID?: number;
  createdAt?: string;
  updatedAt?: string;
};

const ProductFeatures = ({ product }: { product: IProduct }) => {
  return (
    <SectionWithoutPadding>
      <RedSpot />
      <RectangularImg image="https://ik.imagekit.io/a83g0okds/rec-group.png?updatedAt=1685026476536">
        <YellowSpot />
      </RectangularImg>

      <h2>Product Features</h2>
      <FeaturesListWrapper>
        {product.ProductAttriputes.length > 0
          ? product.ProductAttriputes.map((feature: Attripute) => {
              return <ListItem feature={feature} />;
            })
          : null}
      </FeaturesListWrapper>
    </SectionWithoutPadding>
  );
};

export default ProductFeatures;
