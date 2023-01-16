import { ChakraProvider } from "@chakra-ui/react";
import { Inter } from "@next/font/google";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      black: "#00000",
      white: "#FFFFFF",
      neon: "#C6FF00",
      gray: "#1A1E21",
      lightGray: "#5C5C5C",
    },
  },
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: "black",
      },
    },
  },
});
const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </main>
  );
}
