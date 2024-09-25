// theme.js
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      // This will set the background color for the entire application
      body: {
        bg: "#b9edc7", // Change this to the color you want
      },
    },
  },
});

export default theme;
