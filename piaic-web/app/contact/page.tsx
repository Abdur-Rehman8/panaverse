"use client"
import { Box, Center, Container, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import Home from '../Home'
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { HiLocationMarker } from "react-icons/hi";
import { HiOutlineMailOpen } from "react-icons/hi";

export default function Contact() {
  return (
    <>
      <Home title="Contact" src={'/about.webp'} />

      <Box >
        <Container maxW={1400} py='100px'>
          <Center>
            <Heading size={"lg"} fontWeight='normal' fontFamily={"sans-serif"} fontSize={"18px"}>CONTACT</Heading>
          </Center>

          <Center>
            <Heading fontWeight={'medium'} fontSize="45px" fontFamily={"sans-serif"}>Lets start right now!</Heading>
          </Center>

          <Box>
            <Flex gap="20px">
              <Box flexBasis={"30%"} >


                <Box fontFamily={'sans-serif'} pb="30px">
                  <TfiHeadphoneAlt size={"30px"} />
                  <Heading py="10px"fontWeight={"semibold"} fontSize="26px" fontFamily={"sans-serif"}>
                    1-001-234-5678
                  </Heading>
                  <Text fontSize={"18px"} fontWeight="medium" fontFamily={"sans-serif"}>
                    Call us: Mon - Fri 9:00 - 19:00

                  </Text>
                </Box>

                <Box pb="30px">
                  <HiLocationMarker size={"30px"} />
                  <Heading py="10px" fontWeight={"semibold"} fontSize="26px" fontFamily={"sans-serif"}>
                    New York
                  </Heading>
                  <Text fontSize={"18px"} fontWeight="medium" fontFamily={"sans-serif"}>
                    990 Madison Ave, Midtown Manhattan, 2th Floor, NY 10022

                  </Text>
                </Box>
                <Box pb="30px">
                  <HiOutlineMailOpen size={"30px"} />
                  <Heading py="10px" fontWeight={"semibold"} fontSize="26px" fontFamily={"sans-serif"}>
                    info@dream-theme.com

                  </Heading>
                  <Text fontSize={"18px"} fontWeight="medium" fontFamily={"sans-serif"}>
                    Drop us a line anytime!

                  </Text>
                </Box>



              </Box>
              <Box flexBasis={"65%"} bgColor="red.400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Box>
            </Flex>
          </Box>

        </Container>
      </Box>
    </>

  )


}

