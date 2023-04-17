import { Box, Center, Container, Heading, SimpleGrid, Spacer, Text, Link, Flex, Button } from '@chakra-ui/react'
import React from 'react'
import { TopCourse } from './databse'

export default function Courses() {
    return (

        <>

            <Box bgColor={"#38aec65e"} py="15px">
                <Container maxW={1400} textAlign="center" >

                    <Center>
                        <Heading borderColor='cyan.400 !important' borderLeft="8px" pl="15px" borderStyle={"solid"} my="30px">
                            Our Top <span style={{color:"#08bebeb5"}}>Courses</span></Heading>
                    </Center>

                    <SimpleGrid templateColumns={{xl:"repeat(3,1fr)",md:"repeat(2,1fr)",sm:"repeat(1,1fr)"}}  gap="30px" px={{lg:"100px",md:"50px",base:"20px"}}>
                        {TopCourse.map((ins) =>

                            <Box bgColor={"white"} key={ins.id} boxShadow={"dark-lg"} borderRadius="3xl" textAlign={"center"} p="30px">
                                <Heading pb="5px" borderBottom={"4px solid cyan"}>
                                    {ins.heading}
                                </Heading>
                                <Text py="10px">
                                    {ins.text}
                                </Text>
                                <Link color='cyan.600' href={'/'} textDecoration="none !important">Learn More
                                </Link>
                            </Box>
                        )}
                    </SimpleGrid>
                    <Button my="30px" bgColor={"cyan.400"} color="white" size="lg">View All</Button>


                </Container>
            </Box>

        </>
    )
}
