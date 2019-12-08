/*

Tailwind - The Utility-First CSS Framework

Welcome to the Tailwind config file. This is where you can customize
Tailwind specifically for your project. Don't be intimidated by the
length of this file. It's really just a big JavaScript object and
we've done our very best to explain each section.

View the full documentation at https://tailwindcss.com.

*/

const colors = {
  body: '#FCFCFE',
  blue: '#3E417E',
  blueDarker: '#25274C',
  white: '#FFFFFF',
  blueLight: '#F0F2FE',
};

const sizes = {
  auto: 'auto',
  '0': '0',
  '1': '1rem',
  '2': '2rem',
  '3': '3rem',
  '4': '4rem',
  '5': '5rem',
  '6': '6rem',
  '7': '7rem',
  '8': '8rem',
  '9': '9rem',
  '10': '10rem',
};

module.exports = {
  colors,

  /*
  |-----------------------------------------------------------------------------
  | [Screens] https://tailwindcss.com/docs/responsive-design
  | [Tailwind macro] {screen}:{utility}
  |-----------------------------------------------------------------------------
  */

  screens: {
    xs: '425px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },

  /*
  |-----------------------------------------------------------------------------
  | [Text sizes] https://tailwindcss.com/docs/text-sizing
  | [Tailwind macro] text-{size}
  |-----------------------------------------------------------------------------
  */

  textSizes: {
    h1: '4.4rem',
    h2: '3.8rem',
    h3: '2.8rem',
    h4: '2.2rem',
    h5: '1.6rem',
    keynumber: '7.6rem',
    caption: '1.4rem',
    intro: '2.4rem',
    recap: '2.2rem',
    headerTab: '1.8rem',
  },

  /*
  |-----------------------------------------------------------------------------
  | [Fonts] https://tailwindcss.com/docs/fonts
  | [Tailwind macro] font-{name}
  |-----------------------------------------------------------------------------
  */

  fonts: {
    sans: [
      'HankenGrotesk',
      'system-ui',
      'BlinkMacSystemFont',
      '-apple-system',
      'Segoe UI',
      'Roboto',
      'Oxygen',
      'Ubuntu',
      'Cantarell',
      'Fira Sans',
      'Droid Sans',
      'Helvetica Neue',
      'sans-serif',
    ],
  },

  /*
  |-----------------------------------------------------------------------------
  | [Font weights] https://tailwindcss.com/docs/font-weight
  | [Tailwind macro] font-{weight}
  |-----------------------------------------------------------------------------
  */

  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },

  /*
  |-----------------------------------------------------------------------------
  | [Text colors] https://tailwindcss.com/docs/text-color
  | [Tailwind macro] text-{color}
  |-----------------------------------------------------------------------------
  */

  textColors: colors,

  /*
  |-----------------------------------------------------------------------------
  | [Background colors] https://tailwindcss.com/docs/background-color
  | [Tailwind macro] bg-{color}
  |-----------------------------------------------------------------------------
  */

  backgroundColors: colors,

  /*
  |-----------------------------------------------------------------------------
  | [Background sizes] https://tailwindcss.com/docs/background-size
  | [Tailwind macro] bg-{size}
  |-----------------------------------------------------------------------------
  */

  backgroundSize: {
    auto: 'auto',
    cover: 'cover',
    contain: 'contain',
  },

  /*
  |-----------------------------------------------------------------------------
  | [Border radius] https://tailwindcss.com/docs/border-radius
  | [Tailwind macro] rounded{-side?}{-size?}
  |-----------------------------------------------------------------------------
  */

  borderRadius: {
    none: '0',
    sm: '.125rem',
    def: '.5rem',
    lg: '1rem',
    xl: '1.5rem',
    full: '9999px',
  },

  /*
  |-----------------------------------------------------------------------------
  | [Width] https://tailwindcss.com/docs/width
  | [Tailwind macro] w-{size}
  |-----------------------------------------------------------------------------
  */

  width: {
    ...sizes,
    full: '100%',
    screen: '100vw',
  },

  /*
  |-----------------------------------------------------------------------------
  | [Height] https://tailwindcss.com/docs/height
  | [Tailwind macro] h-{size}
  |-----------------------------------------------------------------------------
  */

  height: {
    ...sizes,
    full: '100%',
    screen: '100vh',
  },

  /*
  |-----------------------------------------------------------------------------
  | [Padding] https://tailwindcss.com/docs/padding
  | [Tailwind macro] p{side?}-{size}
  |-----------------------------------------------------------------------------
  */

  padding: sizes,

  /*
  |-----------------------------------------------------------------------------
  | [Margin] https://tailwindcss.com/docs/margin
  | [Tailwind macro] m{side?}-{size}
  |-----------------------------------------------------------------------------
  */

  margin: sizes,

  /*
  |-----------------------------------------------------------------------------
  | [Shadows] https://tailwindcss.com/docs/shadows
  | [Tailwind macro] shadow-{size?}
  |-----------------------------------------------------------------------------
  */

  shadows: {
    def: '0 2px 30px 0 rgba(0, 0, 0, 0.1)',
    default: '0px 0px 30px 0px rgba(231, 232, 240, 1)',
    md:
      '0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)',
    lg:
      '0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)',
    inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
    outline: '0 0 0 3px rgba(52,144,220,0.5)',
    header: '0 1px 4px 0 rgba(0,0,0,0.10)',
    none: 'none',
  },

  /*
  |-----------------------------------------------------------------------------
  | [Z-index] https://tailwindcss.com/docs/z-index
  | [Tailwind macro] z-{index}
  |-----------------------------------------------------------------------------
  */

  zIndex: {
    auto: 'auto',
    '0': 0,
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
  },

  /*
  |-----------------------------------------------------------------------------
  | [Opacity] https://tailwindcss.com/docs/opacity
  | [Tailwind macro] opacity-{name}
  |-----------------------------------------------------------------------------
  */

  opacity: {
    '0': '0',
    '25': '.25',
    '50': '.5',
    '75': '.75',
    '100': '1',
  },

  /*
  |-----------------------------------------------------------------------------
  | [SVG fill] https://tailwindcss.com/docs/svg
  | [Tailwind macro] fill-{name}
  |-----------------------------------------------------------------------------
  */

  svgFill: {
    ...colors,
    current: 'currentColor',
  },

  /*
  |-----------------------------------------------------------------------------
  | [SVG stroke] https://tailwindcss.com/docs/svg
  | [Tailwind macro] stroke-{name}
  |-----------------------------------------------------------------------------
  */

  svgStroke: {
    ...colors,
    current: 'currentColor',
  },

  /*
  |-----------------------------------------------------------------------------
  | [Modules] https://tailwindcss.com/docs/configuration#modules
  |-----------------------------------------------------------------------------
  |
  | Here is where you control which modules are generated and what variants are
  | generated for each of those modules.
  |
  | Currently supported variants:
  |   - responsive
  |   - hover
  |   - focus
  |   - focus-within
  |   - active
  |   - group-hover
  |
  | To disable a module completely, use `false` instead of an array.
  |
  */

  modules: {
    appearance: ['responsive'],
    backgroundAttachment: ['responsive'],
    backgroundColors: ['responsive', 'hover', 'focus'],
    backgroundPosition: ['responsive'],
    backgroundRepeat: ['responsive'],
    backgroundSize: ['responsive'],
    borderCollapse: [],
    borderColors: ['responsive', 'hover', 'focus'],
    borderRadius: ['responsive'],
    borderStyle: ['responsive'],
    borderWidths: ['responsive'],
    cursor: ['responsive'],
    display: ['responsive'],
    flexbox: ['responsive'],
    float: ['responsive'],
    fonts: ['responsive'],
    fontWeights: ['responsive', 'hover', 'focus'],
    height: ['responsive'],
    leading: ['responsive'],
    lists: ['responsive'],
    margin: ['responsive'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    negativeMargin: ['responsive'],
    objectFit: false,
    objectPosition: false,
    opacity: ['responsive'],
    outline: ['focus'],
    overflow: ['responsive'],
    padding: ['responsive'],
    pointerEvents: ['responsive'],
    position: ['responsive'],
    resize: ['responsive'],
    shadows: ['responsive', 'hover', 'focus'],
    svgFill: [],
    svgStroke: [],
    tableLayout: ['responsive'],
    textAlign: ['responsive'],
    textColors: ['responsive', 'hover', 'focus'],
    textSizes: ['responsive'],
    textStyle: ['responsive', 'hover', 'focus'],
    tracking: ['responsive'],
    userSelect: ['responsive'],
    verticalAlign: ['responsive'],
    visibility: ['responsive'],
    whitespace: ['responsive'],
    width: ['responsive'],
    zIndex: ['responsive'],
  },

  /*
  |-----------------------------------------------------------------------------
  | [Advanced Options] https://tailwindcss.com/docs/configuration#options
  |-----------------------------------------------------------------------------
  |
  | Here is where you can tweak advanced configuration options. We recommend
  | leaving these options alone unless you absolutely need to change them.
  |
  */

  options: {
    prefix: '',
    important: true,
    separator: ':',
  },
};
