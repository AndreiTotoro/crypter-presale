import { Button, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";

export default function Navbar() {
  return (
    <HStack
      w={"100%"}
      align={"center"}
      my={10}
      justify={"space-between"}>
      <Image
        src="logo.svg"
        width={[150, 150, 270]}></Image>
      <Button
        rounded={"10em"}
        bg="brand.neon"
        p={6}
        px={10}
        fontWeight={"bold"}
        color={"brand.black"}>
        Connect Wallet
      </Button>
    </HStack>
  );
}
