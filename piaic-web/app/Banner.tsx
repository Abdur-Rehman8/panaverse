import { Box, Button, Container, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'


export default function Banner() {
    return (
        // bg="#aa43eeb8" color
        <>
            <Box bgImage="/p.jpg">

                <Container maxW={1400}>

                    <Flex pt={{lg:"150px",base:"67px"}} pb="120px"  display={{lg:"flex",base:"grid"}}>
                        <Box flexBasis={"50%"} pr={{lg:"164px",base:"30px"}}>


                            <Heading size={{lg:"2xl",base:"2xl"}} color={"#000000"} >Prepare yourself for the Next Generation of Internet with Panaverse</Heading>

                            <Text pt="10px" color={"#000000"}>One Year Panaverse DAO Earn as you Learn Program. Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, and Ambient Computing/IoT Technologies</Text>

                            <Button mt="13px" size={{lg:"lg" ,base:"md"}} bgColor={"#673ec173"} color="#ffff">More Info</Button>

                        </Box>

                        <Box flexBasis={"50%"} mt={{lg:"-70px",base:"40px"}}>

                            <Image src='/banner.webp' width={"500px"} alt="banner" />

                        </Box>

                    </Flex>

                </Container>

            </Box>


            <Box pt={{lg:"100px",base:"45px"}} pb="70px"  >
                <Container maxW={1400}>
                    <Flex gap={{lg:"100px",base:"40px"}} display={{lg:"flex",base:"grid"}}>
                        <Box flexBasis={{lg:"50%",base:"100%"}}>
                            <Image src="/program.png" width={{lg:"400px",base:"313px "}} m="0px auto" alt="program" />

                        </Box>
                        <Box  flexBasis={{lg:"50%",base:"100%"}}>

                        <Heading size={{lg:"3xl",base:"2xl"}} color={"#000000"} >Program Of Studies</Heading>

                            <Text pt="25px" pr={{lg:"79px",base:"25px"}} color={"#000000"}>This curriculum is intended for beginners who want to learn software development from the ground up. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects.</Text>

                            <Button mt="20px" size={"md"} bgColor={"#673ec173"} color="#ffff">Read More</Button>

                        </Box>
                    </Flex>
                </Container>
            </Box>

        </>
    )
}
