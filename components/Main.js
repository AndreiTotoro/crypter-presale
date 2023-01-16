import { Box, HStack, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Card from "./Card";

export default function Main() {
  return (
    <HStack
      flexDir={["column-reverse", "column-reverse", "column-reverse", "row"]}
      spacing={[0, 0, 0, 120]}
      pt={45}
      fontSize={"md"}
      align={"baseline"}
      w={"100%"}>
      <VStack
        align={"flex-start"}
        w={"100%"}
        flexBasis={["100%", "100%", "100%", "60%"]}
        spacing={12}>
        <Text
          color={"brand.white"}
          fontWeight={"extrabold"}
          fontSize={"6xl"}>
          Crypter Presale
        </Text>
        <Text color={"white"}>
          In the past few years, cryptocurrency has become more and more
          popular, with people all over the world investing in various digital
          currencies. However, there has been one major problem that has plagued
          the crypto community: a lack of a good social media platform. Enter
          Crypter, a social media platform that is specifically designed for
          cryptocurrency users. Crypter is a social media platform that allows
          users to connect with other crypto enthusiasts from all over the
          world.
        </Text>
        <HStack
          flexDir={["column", "column", "column", "row"]}
          gap={16}>
          <Box>
            <Box mb={10}>
              <Text
                fontWeight={"bold"}
                fontSize="4xl"
                color={"brand.neon"}
                pb={4}>
                Engage to Earn
              </Text>
              <Text color={"white"}>
                Crypters’ key feature is the engage to earn reward system. Users
                of the platform can earn points by engaging inside Crypter. You
                can also earn points by inviting people to Crypter using our
                Referral System. Free users are capped to a certain number of
                points per day while Paid users can make generate more points
                per day depending on their plan. Once you have enough points you
                can request for a withdrawal.{" "}
              </Text>
            </Box>
            <Box>
              <Text
                pb={4}
                fontWeight={"bold"}
                fontSize="4xl"
                color={"brand.neon"}>
                Access to dApps
              </Text>
              <Text color={"white"}>
                Whether it’s playing games or getting access to your favorite
                dApps, Crypter is here to serve your needs. This feature will be
                available very soon inside the platform. Works just the same as
                the Game feature, but for dApps..{" "}
              </Text>
            </Box>
          </Box>
          <Box>
            <Box mb={10}>
              <Text
                pb={4}
                fontWeight={"bold"}
                fontSize="4xl"
                color={"brand.neon"}>
                Play Crypto Games
              </Text>
              <Text color={"white"}>
                Now you can play with your friends while chatting inside
                Crypter. There’s no need to leave the platform just to get in
                touch with your friends. Discuss strategies, ask questions about
                the game, all in one platform. We are currently in the process
                of partnering with different projects to grow our current list
                of games.
              </Text>
            </Box>
            <Box>
              <Text
                pb={4}
                fontWeight={"bold"}
                fontSize="4xl"
                color={"brand.neon"}>
                Connect with Friends
              </Text>
              <Text color={"white"}>
                The Crypter messaging system is both simple and effective. You
                can send photos, voice recordings or even GIFs to your friends!
                The best part about it? You'll get notifications on the app
                whenever someone sends you a message - so easy that even newbies
                will feel comfortable using this feature right away without any
                guidance whatsoever. And better yet: we're working hard towards
                implementing an audio/video call function as well which should
                be available soon.{" "}
              </Text>
            </Box>
          </Box>
        </HStack>
      </VStack>
      <Box
        pb={[16, 16, 16, 0]}
        w={"100%"}
        flexBasis={["100%", "100%", "100%", "35%"]}>
        <Card />
      </Box>
    </HStack>
  );
}
