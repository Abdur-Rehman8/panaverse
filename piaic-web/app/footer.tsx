import { Box, Container, Flex, Grid, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from "../public/white-logo.png"
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'

export default function Footer() {
    return (
        <Box bg={"#0c0c0e"}>

            <Container maxW={1400}>
                <SimpleGrid spacingY={{base:30}}  templateColumns={{lg:'repeat(4, 1fr)',base:'repeat(1, 1fr)'}} pt="60px" pb="60px">
                    <Box>
                        <Heading  pb="20px" textTransform="uppercase" size={"md"}  color={"#ffff"}>about us</Heading>
                        <Image src={logo} alt="footer-logo" width={150}></Image>
                        <Text  pt="20px" pr="31" color={"#808080"}>The Future of the Web is Web 3.0, Metaverse, and Edge Computing. Panaverse DAO is a movement to spread these technolgies globally. It is community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers.</Text>
                    </Box>
                    <Box>
                        <Heading textTransform={'uppercase'}   size={"md"}  color={"#ffff"}>useful links</Heading>

                        <Grid color={"#808080"} pt="20px" gap={2}>
                            <Link href={"/"}>Home </Link>
                            <Link href={"/syllabus"}>Syllabus</Link>
                            <Link href={"/explore"}>Explore</Link>
                            <Link href={"/about"}>About</Link>
                            <Link href={"/contact"}>Contact</Link>
                        </Grid>

                    </Box>
                  


                    <Box>
                        <Heading textTransform={'uppercase'}  size={"md"} color={"#ffff"}  >FOLLOW US</Heading>

                        <Grid color={"#808080"} pt="20px" gap={2}>
                            <Link href={"#"}>Facebook</Link>
                            <Link href={"#"}>Youtube</Link>
                            <Link href={"#"}>Twitter</Link>
                            <Link href={"#"}>Linkedin</Link>
                            <Link href={"#"}>Github</Link>
                        </Grid>

                    </Box>


                    <Box>
                        <Heading textTransform={'uppercase'}   size={"md"} color={"#ffff"}>CONTACT  US</Heading>

                        <Grid color={"#808080"} pt="20px" gap={2}>
                        <Flex alignItems={"center"}><PhoneIcon /><Link href={"#"}>+92 123 4567890</Link></Flex>
                            <Link href={"#"}>abcdefghi@gmail.com</Link>
                            <Link href={"#"}>Karachi, Pakistan</Link>
                        </Grid>

                    </Box>
                </SimpleGrid>
            </Container>

        </Box>
    )
}
