import { styled, theme } from '../stitches.config';

export const Button = styled('button', {
  appearance: 'none',
  border: 'none',
  backgroundColor: 'transparent',
  color: 'inherit',
  '+ Button': {
    marginLeft: '12px',
  },
  px: '$3',
  py: '$2',

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
        $$normal: theme.colors.primary400,
        $$hover: theme.colors.primary500,
        $$press: theme.colors.primary600,
        backgroundColor: '$$normal',
        '&:hover': {
          backgroundColor: '$$hover',
        },
        '&:active': {
          backgroundColor: '$$press',
        },
      },
      secondary: {
        $$normal: theme.colors.secondary400,
        $$hover: theme.colors.secondary500,
        $$press: theme.colors.secondary600,
        backgroundColor: '$$normal',
        '&:hover': {
          backgroundColor: '$$hover',
        },
        '&:active': {
          backgroundColor: '$$press',
        },
      },
      accent: {
        $$normal: theme.colors.accent400,
        $$hover: theme.colors.accent500,
        $$press: theme.colors.accent600,
        backgroundColor: '$$normal',
        '&:hover': {
          backgroundColor: '$$hover',
        },
        '&:active': {
          backgroundColor: '$$press',
        },
      },
    },
    type: {
      light: {},
      emotion: {},
      ghost: {},
      disabled: {},
    },
    shape: {
      square: {
        borderRadius: '$none',
      },
      soft: {
        borderRadius: '$2',
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
    size: 'lg',
    color: 'primary',
    shape: 'soft',
    style: 'light',
  },

  compoundVariants: [
    {
      color: 'primary',
      type: 'emotion',
      css: {
        $$normal: '$colors$primary900',
        $$hover: '$colors$primary1000',
        $$press: '$$normal',
      },
    },
    {
      color: 'secondary',
      type: 'emotion',
      css: {
        $$normal: '$colors$secondary900',
        $$hover: '$colors$secondary1000',
        $$press: '$$normal',
      },
    },
    {
      color: 'accent',
      type: 'emotion',
      css: {
        $$normal: '$colors$accent900',
        $$hover: '$colors$accent1000',
        $$press: '$$normal',
      },
    },
  ],
});
