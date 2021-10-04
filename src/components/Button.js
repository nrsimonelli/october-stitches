import { styled } from '../stitches.config';

export const Button = styled('button', {
  appearance: 'none',
  border: 'none',
  backgroundColor: 'transparent',

  variants: {
    size: {
      sm: {
        fontSize: '$1',
      },
      md: {
        fontSize: '$2',
      },
      lg: {
        fontSize: '$3',
      },
    },
    color: {
      primary: {
        backgroundColor: '$primary',
      },
      secondary: {
        backgroundColor: '$secondary',
      },
    },
    shape: {
      square: {
        borderRadius: '$none',
      },
      pill: {
        borderRadius: '$pill',
      },
      round: {
        borderRadius: '$round',
      },
    },
  },

  defaultVariants: {
    size: 'sm',
    color: 'primary',
    shape: 'pill',
  },
});
