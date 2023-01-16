import Navbar from "@/components/Navbar";
import { Box, Container, Text } from "@chakra-ui/react";
import Card from "../components/Card";

export default function Home() {
  return (
    <Container maxW={1500}>
      <Navbar />
      <Card />
    </Container>
  );
}
