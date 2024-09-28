import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      // Set the background color for the entire application
      body: {
        bg: "#D8E3D4",
        fontFamily: "Roboto, sans-serif", // Global font set to Roboto
      },
    },
  },
  fonts: {
    body: "Roboto, sans-serif", // Roboto for body text
    heading: "Roboto, sans-serif", // Roboto for headings
  },
});

export default theme;
