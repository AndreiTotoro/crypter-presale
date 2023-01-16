import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Box, Container, Text, VStack } from "@chakra-ui/react";
import Card from "../components/Card";

export default function Home() {
  return (
    <Container maxW={1500}>
      <VStack
        minH={"100vh"}
        justify={"space-between"}>
        <Box w={"100%"}>
          <Navbar />
          <Card />
        </Box>
        <Footer />
      </VStack>
    </Container>
  );
}
