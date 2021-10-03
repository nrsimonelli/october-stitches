import { createStitches } from '@stitches/react';
import { gray, blue, red, green } from '@radix-ui/colors';

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
      ...gray,
      ...blue,
      ...red,
      ...green,
    },
    fonts: {
      $untitled:
        'Untitled Sans, -apple-system, system-ui, sans-serif',
      $mono: 'Söhne Mono, menlo, monospace',
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
      round: '9999px',
    },
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    borderWidths: {},
    borderStyles: {},
    shadows: {},
    zIndices: {},
    transitions: {},
  },
  media: {
    bp1: '(min-width: 640px)',
    bp2: '(min-width: 768px)',
    bp3: '(min-width: 1024px)',
  },
  utils: {
    p: (value: any) => ({
      paddingTop: value,
      paddingBottom: value,
      paddingLeft: value,
      paddingRight: value,
    }),
    pt: (value: any) => ({
      paddingTop: value,
    }),
    pr: (value: any) => ({
      paddingRight: value,
    }),
    pb: (value: any) => ({
      paddingBottom: value,
    }),
    pl: (value: any) => ({
      paddingLeft: value,
    }),
    px: (value: any) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: any) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    m: (value: any) => ({
      marginTop: value,
      marginBottom: value,
      marginLeft: value,
      marginRight: value,
    }),
    mt: (value: any) => ({
      marginTop: value,
    }),
    mr: (value: any) => ({
      marginRight: value,
    }),
    mb: (value: any) => ({
      marginBottom: value,
    }),
    ml: (value: any) => ({
      marginLeft: value,
    }),
    mx: (value: any) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: any) => ({
      marginTop: value,
      marginBottom: value,
    }),

    ta: (value: any) => ({ textAlign: value }),

    fd: (value: any) => ({ flexDirection: value }),
    fw: (value: any) => ({ flexWrap: value }),

    ai: (value: any) => ({ alignItems: value }),
    ac: (value: any) => ({ alignContent: value }),
    jc: (value: any) => ({ justifyContent: value }),
    as: (value: any) => ({ alignSelf: value }),
    fg: (value: any) => ({ flexGrow: value }),
    fs: (value: any) => ({ flexShrink: value }),
    fb: (value: any) => ({ flexBasis: value }),

    bs: (value: any) => ({ boxShadow: value }),

    lh: (value: any) => ({ lineHeight: value }),

    ox: (value: any) => ({ overflowX: value }),
    oy: (value: any) => ({ overflowY: value }),

    pe: (value: any) => ({ pointerEvents: value }),
    us: (value: any) => ({ userSelect: value }),

    linearGradient: (value: any) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),
    size: (value: any) => ({
      width: value,
      height: value,
    }),

    br: (value: any) => ({
      borderRadius: value,
    }),
  },
});
