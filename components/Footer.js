import { Flex } from "@chakra-ui/react";
import React from "react";

import {
  FaTwitter,
  FaTelegramPlane,
  FaDiscord,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <Flex
      color="brand.neon"
      justify="center"
      gap="10"
      height="5%"
      pb={"5"}
      pt={"10"}>
      <FaTwitter size="2em" />
      <FaTelegramPlane size="2em" />
      <FaDiscord size="2em" />
      <FaYoutube size="2em" />
    </Flex>
  );
}
