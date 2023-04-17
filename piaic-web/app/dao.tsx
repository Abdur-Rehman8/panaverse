import { Box, Button, Center, Container, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

export default function Dao() {
  return (
    <Box>
      <Container maxW={1400} pt="100px" pb="20px">
        <Flex alignItems="center" px={{ lg: "100px", base: "20px" }} flexDir={{ lg: "row", md: "row", sm:"column" }} display={{ md:"flex",base:"grid"}}>
          <Box flexBasis={"50%"} alignItems="center">
            <Heading borderColor='cyan.400 !important' borderLeft="8px" borderStyle={"solid"} pl="15px">
              What Is <span style={{ color: "#0cdadaa3" }}>Panaverse DAO?</span>
            </Heading>
            <Text pr={{lg:"70px",base:"20px"}} py="10px">
              Panaverse DAO is a community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers. Panaverse DAO is struggling to produce professional metaverse developers from Pakistan for the upcoming Era of Internet.
            </Text>
            <Button bgColor={"#0cdada"} color="white" mt="10px">Read More</Button>
          </Box>
          <Box flexBasis={"50%"}>
            <Image src='/dao.jpg' width={"430px"} m="0px auto" mt={{lg:"0px",base:"50px"}} />
          </Box>
        </Flex>
        <Box textAlign={"center"} py="70px" borderLeft={"7px solid #009494"} borderRadius="2xl" my="40px" px={{lg:"110px",Base:"20px" }}bgColor={"#38aec65e"}>
          
          <Heading>The Program in a Nutshell <br/> <span style={{color:"#007d7d"}}>Earn While You Learn</span></Heading>
          <Text py="10px" px={{lg:"90px",base:"20px"}}>In this brand-new type of curriculum, students will learn how to make money and boost exports in the classroom and will begin doing so within six months of the program’s beginning. It resembles a cross between a corporate venture and an educational project.</Text>

          
        </Box>
      </Container>
    </Box>
  )
}
