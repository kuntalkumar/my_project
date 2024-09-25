import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      // Set the background color for the entire application
      body: {
        bg: "#b4dbb5",
      },
    },
  }
  // ,
  // // Add custom fonts here
  // fonts: {
  //   body: "Roboto, sans-serif", // Font for the body
  //   heading: "Georgia, serif",  // Font for headings
  // },
});

export default theme;
