import { createStitches } from '@stitches/react';

import {
  slate,
  blue,
  indigo,
  sky,
  yellow,
  amber,
  orange,
  sand,
} from '@radix-ui/colors';
import type * as Stitches from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      ...slate,
      ...indigo,
      ...blue,
      ...sky,
      // app backgrounds
      bg100: '$slate1',
      bg200: '$slate2',

      // normal, hover, pressed states
      // scale to 4 -> 5 -> 6 if CTA
      primary300: '$indigo3',
      primary400: '$indigo4',
      primary500: '$indigo5',

      // border colors: disabled, interactive, and hover
      primary600: '$indigo6',
      primary700: '$indigo7',
      primary800: '$indigo8',

      // solid background + hover state
      primary900: '$indigo9',
      primary1000: '$indigo10',

      // low contrast and high contrast text
      lowContrastText: '$slate11',
      highContrastText: '$slate12',

      secondary300: '$blue3',
      secondary400: '$blue4',
      secondary500: '$blue5',
      secondary600: '$blue6',
      secondary700: '$blue7',
      secondary800: '$blue8',
      secondary900: '$blue9',
      secondary1000: '$blue10',

      accent300: '$sky3',
      accent400: '$sky4',
      accent500: '$sky5',
      accent600: '$sky6',
      accent700: '$sky7',
      accent800: '$sky8',
      accent900: '$sky9',
      accent1000: '$sky10',

      gray300: '$slate3',
      gray400: '$slate4',
      gray500: '$slate5',
      gray600: '$slate6',
      gray700: '$slate7',
      gray800: '$slate8',
      gray900: '$slate9',
      gray1000: '$slate10',
    },
    fonts: {
      untitled: 'Untitled Sans, -apple-system, system-ui, sans-serif',
      mono: 'Söhne Mono, menlo, monospace',
    },
    fontSizes: {
      1: '12px',
      2: '14px',
      3: '16px',
      4: '20px',
      5: '24px',
      6: '32px',
    },
    space: {
      1: '4px',
      2: '8px',
      3: '16px',
      4: '32px',
      5: '64px',
      6: '128px',
    },
    sizes: {
      1: '4px',
      2: '8px',
      3: '16px',
      4: '32px',
      5: '64px',
      6: '128px',
    },
    radii: {
      1: '2px',
      2: '4px',
      3: '8px',
      4: '12px',
      none: '0',
      round: '50%',
      pill: '9999px',
    },
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    borderWidths: {},
    borderStyles: {},
    shadows: {},
    zIndices: {
      1: '100',
      2: '200',
      3: '300',
      4: '400',
      max: '999',
    },
    transitions: {},
  },
  media: {
    sm: '(min-width: 520px)',
    md: '(min-width: 900px)',
    lg: '(min-width: 1200px)',
    xl: '(min-width: 1800px)',
  },
  utils: {
    p: (value: Stitches.PropertyValue<'padding'>) => ({
      paddingTop: value,
      paddingBottom: value,
      paddingLeft: value,
      paddingRight: value,
    }),
    px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    m: (value: Stitches.PropertyValue<'margin'>) => ({
      marginTop: value,
      marginBottom: value,
      marginLeft: value,
      marginRight: value,
    }),
    mx: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
      marginBottom: value,
    }),
  },
});

export type CSS = Stitches.CSS<typeof config>;

export const newTheme = createTheme('new-theme', {
  colors: {
    ...sand,
    ...yellow,
    ...amber,
    ...orange,
    // app backgrounds
    bg100: '$sand1',
    bg200: '$sand2',

    // normal, hover, pressed states
    // scale to 4 -> 5 -> 6 if CTA
    primary300: '$yellow3',
    primary400: '$yellow4',
    primary500: '$yellow5',

    // border colors: disabled, interactive, and hover
    primary600: '$yellow6',
    primary700: '$yellow7',
    primary800: '$yellow8',

    // solid background + hover state
    primary900: '$yellow9',
    primary1000: '$yellow10',

    // low contrast and high contrast text
    lowContrastText: '$sand11',
    highContrastText: '$sand12',

    secondary300: '$amber3',
    secondary400: '$amber4',
    secondary500: '$amber5',
    secondary600: '$amber6',
    secondary700: '$amber7',
    secondary800: '$amber8',
    secondary900: '$amber9',
    secondary1000: '$amber10',

    accent300: '$orange3',
    accent400: '$orange4',
    accent500: '$orange5',
    accent600: '$orange6',
    accent700: '$orange7',
    accent800: '$orange8',
    accent900: '$orange9',
    accent1000: '$orange10',

    gray300: '$slate3',
    gray400: '$slate4',
    gray500: '$slate5',
    gray600: '$slate6',
    gray700: '$slate7',
    gray800: '$slate8',
    gray900: '$slate9',
    gray1000: '$slate10',
  },
});
