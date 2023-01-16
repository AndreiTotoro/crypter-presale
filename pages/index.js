import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Box, Container, Text, VStack } from "@chakra-ui/react";

import Main from "../components/Main";

export default function Home() {
  return (
    <Container maxW={1700}>
      <VStack
        minH={"100vh"}
        justify={"space-between"}>
        <Box w={"90%"}>
          <Navbar />
          <Main />
        </Box>
        <Footer />
      </VStack>
    </Container>
  );
}
