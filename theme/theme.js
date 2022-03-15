// 1. import `extendTheme` function
import { mode } from '@chakra-ui/theme-tools';
import { extendTheme } from "@chakra-ui/react"
// 2. Add your color mode config
import { colors } from './colors';

const styles = {
  global: props => ({
    body: {
      color: mode('gray.800', 'whiteAlpha.900')(props),
      bg: mode('gray.100', 'black')(props),
    },
  }),
};
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
}
const components = {}
// 3. extend the theme
const theme = extendTheme({ config, colors, styles,
components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold', // Normally, it is "semibold"
      },
      sizes: {
        xl: {
          h: '56px',
          fontSize: 'lg',
          px: '32px',
        },
        block: {
          w: '250px',
          h: '56px',
        }
      },
      // 3. We can add a new visual variant
      variants: {
        'gradient': {
          bgGradient: 'linear(to-r, brand.400, brand.700)',
          boxShadow: '0 0 2px 2px #efdfde',
        },
        'gradientL': {
          bgGradient: 'linear(to-l, brand.400, brand.700)',
          boxShadow: '0 0 2px 2px #efdfde',
        },
        // 4. We can override existing variants
        /* solid: (props) => ({
          bg: props.colorMode === 'dark' ? 'red.300' : 'red.500',
        }), */
      },
    }
}
})

export default theme