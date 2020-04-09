import Typography, { TypographyOptions } from 'typography';
import * as breakpoints from 'typography-breakpoint-constants';

const theme: TypographyOptions = {
  baseFontSize: '17px',
  baseLineHeight: 1.45,
  blockMarginBottom: 0.8,
  googleFonts: [
    {
      name: 'Arvo',
      styles: ['700'],
    },
    {
      name: 'Lato',
      styles: ['400', '700'],
    },
  ],
  headerFontFamily: ['Lato', 'sans-serif'],
  bodyFontFamily: ['Lato', 'serif'],
  headerColor: 'var(--primaryTextColor)',
  bodyColor: 'var(--primaryTextColor)',
  headerWeight: '700',
  bodyWeight: 400,
  boldWeight: 700,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => {
    return {
      body: {
        backgroundColor: 'var(--bodyColor)',
      },
      a: {
        color: 'var(--linkColor)',
        textDecoration: 'none',
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 1px, currentColor 1px, currentColor 2px, rgba(0, 0, 0, 0) 2px)`, // eslint-disable-line
      },
      'a:hover,a:active': {
        backgroundImage: 'none',
      },
      h1: {
        fontFamily: 'Arvo, sans-serif',
      },
      'h1,h2,h3,h4,h5,h6': {
        lineHeight: 1.2,
        marginTop: rhythm(1.5),
        marginBottom: rhythm(0.5),
      },
      // Blockquote styles.
      blockquote: {
        ...scale(1 / 5),
        borderLeft: `${rhythm(6 / 16)} solid var(--linkColor)`,
        color: 'var(--secondaryTextColor)',
        paddingLeft: rhythm(10 / 16),
        fontStyle: 'italic',
        marginLeft: 0,
        marginRight: 0,
      },
      'blockquote > :last-child': {
        marginBottom: 0,
      },
      'blockquote cite': {
        ...adjustFontSizeTo(options.baseFontSize),
        color: options.bodyColor,
        fontStyle: 'normal',
        fontWeight: options.bodyWeight,
      },
      'blockquote cite:before': {
        content: '"— "',
      },
      [breakpoints.MOBILE_MEDIA_QUERY]: {
        blockquote: {
          borderLeft: `${rhythm(3 / 16)} solid var(--linkColor)`,
          paddingLeft: rhythm(9 / 16),
          fontStyle: 'italic',
          marginLeft: rhythm(-3 / 4),
          marginRight: 0,
        },
      },
    };
  },
};

const typography = new Typography(theme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
export const { rhythm, scale } = typography;
export const {
  MIN_MOBILE_MEDIA_QUERY,
  MIN_TABLET_MEDIA_QUERY,
  MIN_DEFAULT_MEDIA_QUERY,
  MIN_LARGE_DISPLAY_MEDIA_QUERY,
  MIN_LARGER_DISPLAY_MEDIA_QUERY,
} = breakpoints;
