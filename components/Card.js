import {
  Box,
  Button,
  Divider,
  HStack,
  Input,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

export default function Card() {
  return (
    <VStack
      shadow={"2xl"}
      w={"100%"}
      spacing={8}
      p={10}
      pb={12}
      align={"flex-start"}
      rounded={"2xl"}
      bg={"brand.gray"}>
      <Text
        fontWeight={"extrabold"}
        fontSize={"2xl"}
        color={"brand.neon"}>
        Presale starts in:
      </Text>
      <HStack
        w={"100%"}
        justify={"space-between"}
        color={"white"}>
        <VStack>
          <Text
            fontWeight={"bold"}
            fontSize={"4xl"}>
            07
          </Text>
          <Text color={"brand.lightGray"}>DAYS</Text>
        </VStack>
        <VStack>
          <Text
            fontWeight={"bold"}
            fontSize={"4xl"}>
            16
          </Text>
          <Text color={"brand.lightGray"}>HRS</Text>
        </VStack>
        <VStack>
          <Text
            fontWeight={"bold"}
            fontSize={"4xl"}>
            27
          </Text>
          <Text color={"brand.lightGray"}>MINS</Text>
        </VStack>
        <VStack>
          <Text
            fontWeight={"bold"}
            fontSize={"4xl"}>
            39
          </Text>
          <Text color={"brand.lightGray"}>SECS</Text>
        </VStack>
      </HStack>
      <VStack
        spacing={5}
        width={"100%"}>
        <Slider
          aria-label="slider-ex-1"
          defaultValue={30}>
          <SliderTrack bg={"black"}>
            <SliderFilledTrack bg={"white"} />
          </SliderTrack>
          <SliderThumb
            bg={"#C6FF00"}
            boxSize={6}>
            <Box color={"tomato"} />
          </SliderThumb>
        </Slider>
        <Input
          textAlign={"right"}
          rounded={"lg"}
          placeholder={"MAX"}
          size={"lg"}
          border={"1px solid #1E2327"}
          shadow={"2xl"}></Input>
      </VStack>
      <VStack
        spacing={8}
        w={"100%"}>
        <Text
          alignSelf={"flex-start"}
          color={"brand.lightGray"}>
          You will receive 12.310.000 CRYPT
        </Text>
        <Button
          w={"100%"}
          rounded={"10em"}
          bg="brand.neon"
          p={6}
          py={7}
          px={10}
          fontSize={"lg"}
          fontWeight={"bold"}
          color={"brand.black"}>
          Buy
        </Button>
      </VStack>
      <VStack w={"100%"}>
        <HStack
          w={"100%"}
          justify={"space-between"}
          color={"white"}
          align="center">
          <Text>Status</Text>
          <Text>In progress</Text>
        </HStack>
        <HStack
          w={"100%"}
          justify={"space-between"}
          color={"white"}
          align="center">
          <Text>Sale Type</Text>
          <Text>Whishlisted</Text>
        </HStack>
        <HStack
          w={"100%"}
          justify={"space-between"}
          color={"white"}
          align="center">
          <Text>Minimum Buy</Text>
          <Text>0.01 ETH</Text>
        </HStack>
        <HStack
          w={"100%"}
          justify={"space-between"}
          color={"white"}
          align="center">
          <Text>Maximum Buy</Text>
          <Text>1 ETH</Text>
        </HStack>
      </VStack>
    </VStack>
  );
}
