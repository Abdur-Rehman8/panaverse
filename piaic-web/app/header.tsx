
import { AddIcon, EditIcon, ExternalLinkIcon, HamburgerIcon, RepeatIcon } from '@chakra-ui/icons'
import { Box, Button, Container, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, SimpleGrid } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from "../public/logo.png"

export default function Header() {
  return (
    <Box boxShadow={"lg"}>
      <Container maxW={1400}>
        <SimpleGrid templateColumns='repeat(3, 1fr)'>
          <Box paddingY="6px">
            <Box>
              <Link href="/"> <Image src={logo} alt="panaverse logo">

              </Image></Link>
            </Box>
          </Box>
          <Flex display={{ lg: "flex", base: "none" }} gap={10} fontSize="20" fontWeight="semibold" placeItems={"center"}>
            <Link href={"/"}>Home </Link>
            <Link href={"/syllabus"}>Syllabus</Link>
            <Link href={"/explore"}>Explore</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/contact"}>Contact</Link>
          </Flex>


          <Box alignItems={"center"} pt="19">
            <Button display={{ lg: "flex", base: "none" }} size={"lg"} float={"right"} colorScheme="cyan" color={"white"} >Apply</Button>
          </Box>

          <Box display={{ lg: "none", base: "flex" }} justifyContent="end" pt="24px">
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label='Options'
                icon={<HamburgerIcon />}
                variant='outline'
              />
              <MenuList>
                <MenuItem >
                  <Link href={"/"}>Home </Link>
                </MenuItem>
                <MenuItem >
                  <Link href={"/syllabus"}>Syllabus</Link>
                </MenuItem>
                <MenuItem >
                  <Link href={"/explore"}>Explore</Link>
                </MenuItem>
                <MenuItem >
                  <Link href={"/about"}>About</Link>
                </MenuItem>
                <MenuItem >
                  <Link href={"/contact"}>Contact</Link>
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>

        </SimpleGrid>
      </Container>
    </Box>
  )
}
