import { Box, Center, Container, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { data } from './databse'

export default function Instructors() {
    return (
        <Box pb="60px" mt="30px">
            <Container maxW={1400} textAlign="center">
                <Center>
                    <Heading pl="15px" mb="45px" borderColor='cyan.400 !important' borderLeft="8px" borderStyle={"solid"}>
                        Our Instructors
                    </Heading>
                </Center>
                <SimpleGrid templateColumns={{ lg: 'repeat(5 ,1fr)', md: 'repeat(3,1fr)', base: 'repeat(2,1fr)' }} gap="40px">
                    {data.map((ins) =>


                        <Box key={ins.id}>
                            <Center >
                                <Image borderRadius={"full"} width="70px" src={ins.src} alt="instructors" />
                            </Center>
                            <Heading size={"md"} >
                                {ins.heading}
                            </Heading>
                            <Text fontSize='smaller' px="7px">
                                {ins.text}
                            </Text>
                        </Box>

                    )}
                </SimpleGrid>
            </Container>
        </Box>
    )
}


