//
import Iconify, { IconifyProps } from '../iconify';

// ----------------------------------------------------------------------

type Props = {
  // eslint-disable-next-line react/require-default-props
  icon?: IconifyProps; // Right icon
  // eslint-disable-next-line react/require-default-props
  isRTL?: boolean;
};

export const LeftIcon = ({
  icon = 'eva:arrow-ios-forward-fill',
  isRTL,
}: Props) => {
  return (
    <Iconify
      icon={icon}
      sx={{
        transform: ' scaleX(-1)',
        ...(isRTL && {
          transform: ' scaleX(1)',
        }),
      }}
    />
  );
};

export const RightIcon = ({
  icon = 'eva:arrow-ios-forward-fill',
  isRTL,
}: Props) => {
  return (
    <Iconify
      icon={icon}
      sx={{
        ...(isRTL && {
          transform: ' scaleX(-1)',
        }),
      }}
    />
  );
};
